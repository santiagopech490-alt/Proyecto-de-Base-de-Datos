import { createClient } from './supabase/client';
const supabase = createClient();

/**
 * Storage service for handling file uploads to Supabase Storage.
 */
export const storageService = {
  /**
   * Uploads a profile avatar to the 'avatars' bucket.
   * Files are stored in a folder named after the user's ID.
   * If the Supabase bucket is missing, falls back to Base64 Data URL.
   * 
   * @param userId The ID of the user.
   * @param file The file object to upload.
   * @returns The public URL or base64 data URL of the uploaded avatar.
   */
  async uploadAvatar(userId: string, file: File): Promise<string> {
    const filePath = `${userId}/avatar.png`;

    try {
      const { error: uploadError } = await supabase.storage
        .from('avatars')
        .upload(filePath, file, {
          upsert: true,
          contentType: file.type,
          cacheControl: '0',
        });

      if (!uploadError) {
        const { data: { publicUrl } } = supabase.storage
          .from('avatars')
          .getPublicUrl(filePath);

        return publicUrl;
      }
    } catch (err) {
      console.warn("Supabase storage upload fallback activated:", err);
    }

    // Fallback: convert file to Base64 data URL so avatar preview & update works instantly
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  },

  /**
   * Deletes a user's avatar from the 'avatars' bucket.
   * 
   * @param userId The ID of the user.
   */
  async deleteAvatar(userId: string): Promise<void> {
    try {
      const { data: files, error: listError } = await supabase.storage
        .from('avatars')
        .list(userId);

      if (!listError && files && files.length > 0) {
        const filesToDelete = files.map(file => `${userId}/${file.name}`);
        await supabase.storage
          .from('avatars')
          .remove(filesToDelete);
      }
    } catch (err) {
      console.warn("Avatar delete warning:", err);
    }
  }
};
