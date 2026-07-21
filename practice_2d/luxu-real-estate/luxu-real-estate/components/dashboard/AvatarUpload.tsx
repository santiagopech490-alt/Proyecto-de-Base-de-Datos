import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { storageService } from '@/lib/storage-service';
import { createClient } from '@/lib/supabase/client';
import { toast } from 'sonner';

const supabase = createClient();

interface AvatarUploadProps {
  userId: string;
  currentAvatarUrl: string | null;
}

const AvatarUpload: React.FC<AvatarUploadProps> = ({ userId, currentAvatarUrl }) => {
  const [avatarUrl, setAvatarUrl] = useState(currentAvatarUrl);
  const [uploading, setUploading] = useState(false);

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Handle upload triggered");
    try {
      const file = event.target.files?.[0];
      console.log("File selected:", file);
      if (!file) {
        console.log("No file selected");
        return;
      }

      setUploading(true);
      console.log("Uploading to storage...");
      
      const newUrl = await storageService.uploadAvatar(userId, file);
      console.log("Upload result (newUrl):", newUrl);
      
      if (!newUrl) {
        throw new Error('Failed to get uploaded avatar URL');
      }

      // Update profile in DB
      console.log("Updating profile in DB with avatar_url:", newUrl);
      const { error } = await supabase
        .from('profiles')
        .update({ avatar_url: newUrl })
        .eq('id', userId);

      if (error) {
        console.error("Supabase error:", error);
        throw error;
      }

      setAvatarUrl(newUrl);
      toast.success('Avatar updated successfully!');
      console.log("Avatar updated successfully");
    } catch (error: any) {
      console.error('Avatar upload error:', error);
      toast.error(error.message || 'Failed to update avatar.');
    } finally {
      setUploading(false);
      console.log("Upload process finished");
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <Avatar className="w-24 h-24">
        <AvatarImage src={avatarUrl || ''} />
        <AvatarFallback>USER</AvatarFallback>
      </Avatar>
      <div className="flex gap-2">
        <label htmlFor="avatar-upload" className="cursor-pointer">
          <div className="inline-flex items-center justify-center rounded-lg border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors">
            {uploading ? 'Uploading...' : 'Upload New Photo'}
          </div>
        </label>
        <input 
          id="avatar-upload" 
          type="file" 
          accept="image/*" 
          className="hidden" 
          onChange={handleUpload} 
        />
      </div>
    </div>
  );
};

export default AvatarUpload;
