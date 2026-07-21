import { createClient } from './supabase/client';
const supabase = createClient();

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
    // Force a consistent file path to utilize upsert efficiently and avoid delete RLS issues
    const filePath = `${userId}/avatar.png`;

    const { error: uploadError } = await supabase.storage
      .from('avatars')
      .upload(filePath, file, {
        upsert: true,
        contentType: file.type,
        cacheControl: '0',
      });

    if (uploadError) {
      throw new Error(`Error uploading avatar: ${uploadError.message}`);
    }

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
