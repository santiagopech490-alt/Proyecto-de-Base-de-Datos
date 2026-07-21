import { supabase } from './supabase';

/**
 * Storage service for handling file uploads to Supabase Storage.
 */
export const storageService = {
  /**
   * Uploads a profile avatar to the 'avatars' bucket.
   * Files are stored in a folder named after the user's ID.
   * 
   * @param userId The ID of the user.
   * @param file The file object to upload.
   * @returns The public URL of the uploaded avatar.
   */
  async uploadAvatar(userId: string, file: File): Promise<string> {
    const fileExt = file.name.split('.').pop();
    const fileName = `${userId}/avatar.${fileExt}`;
    const filePath = `${fileName}`;

    // Upload the file to the 'avatars' bucket
    // We use upsert: true to overwrite any existing avatar for the user
    const { error: uploadError } = await supabase.storage
      .from('avatars')
      .upload(filePath, file, {
        upsert: true,
        cacheControl: '3600',
      });

    if (uploadError) {
      throw new Error(`Error uploading avatar: ${uploadError.message}`);
    }

    // Get the public URL for the uploaded file
    const { data: { publicUrl } } = supabase.storage
      .from('avatars')
      .getPublicUrl(filePath);

    return publicUrl;
  },

  /**
   * Deletes a user's avatar from the 'avatars' bucket.
   * 
   * @param userId The ID of the user.
   */
  async deleteAvatar(userId: string): Promise<void> {
    // We don't know the exact extension, so we might need to list files first
    // or just try to delete common ones if we didn't enforce one.
    // For this implementation, we'll list files in the user's folder.
    const { data: files, error: listError } = await supabase.storage
      .from('avatars')
      .list(userId);

    if (listError) {
      throw new Error(`Error listing avatars for deletion: ${listError.message}`);
    }

    if (files && files.length > 0) {
      const filesToDelete = files.map(file => `${userId}/${file.name}`);
      const { error: deleteError } = await supabase.storage
        .from('avatars')
        .remove(filesToDelete);

      if (deleteError) {
        throw new Error(`Error deleting avatar: ${deleteError.message}`);
      }
    }
  }
};
