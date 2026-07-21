import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { storageService } from '@/lib/storage-service';
import { supabase } from '@/lib/supabase';
import { toast } from 'sonner';

interface AvatarUploadProps {
  userId: string;
  currentAvatarUrl: string | null;
}

const AvatarUpload: React.FC<AvatarUploadProps> = ({ userId, currentAvatarUrl }) => {
  const [avatarUrl, setAvatarUrl] = useState(currentAvatarUrl);
  const [uploading, setUploading] = useState(false);

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setUploading(true);
      const file = event.target.files?.[0];
      if (!file) return;

      const newUrl = await storageService.uploadAvatar(userId, file);
      
      // Update profile in DB
      const { error } = await supabase
        .from('profiles')
        .update({ avatar_url: newUrl })
        .eq('id', userId);

      if (error) throw error;

      setAvatarUrl(newUrl);
      toast.success('Avatar updated successfully!');
    } catch (error: any) {
      toast.error('Failed to update avatar.');
      console.error(error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <Avatar className="w-24 h-24">
        <AvatarImage src={avatarUrl || ''} />
        <AvatarFallback>USER</AvatarFallback>
      </Avatar>
      <div className="flex gap-2">
        <label htmlFor="avatar-upload">
          <Button variant="outline" asChild disabled={uploading}>
            <span>{uploading ? 'Uploading...' : 'Upload New Photo'}</span>
          </Button>
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
