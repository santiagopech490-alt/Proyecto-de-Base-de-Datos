'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Pencil } from 'lucide-react';
import { storageService } from '@/lib/storage-service';
import { createClient } from '@/lib/supabase/client';
import { toast } from 'sonner';

const supabase = createClient();

interface UserHeroProps {
  user: {
    id: string;
    full_name: string | null;
    location: string | null;
    member_since: string | null;
    avatar_url: string | null;
  };
}

const UserHero: React.FC<UserHeroProps> = ({ user }) => {
  const router = useRouter();
  const [avatarUrl, setAvatarUrl] = useState(user.avatar_url);
  const [uploading, setUploading] = useState(false);
  const joinDate = user.member_since 
    ? new Date(user.member_since).getFullYear() 
    : '2021';

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      setUploading(true);
      const newUrl = await storageService.uploadAvatar(user.id, file);
      
      if (!newUrl) throw new Error('Upload failed');

      const { data, error } = await supabase
        .from('profiles')
        .update({ avatar_url: newUrl })
        .eq('id', user.id)
        .select();

      if (error) {
        console.error("ERROR CRÍTICO AL GUARDAR EN DB:", error);
        throw error;
      }
      console.log("Respuesta de Supabase tras update:", data);

      setAvatarUrl(`${newUrl}?t=${new Date().getTime()}`);
      toast.success('Avatar updated successfully!');
      router.refresh();
    } catch (error: any) {
      toast.error('Failed to update avatar.');
      console.error(error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="relative w-full h-48 sm:h-64 bg-gradient-to-r from-[#E2F1E7] to-[#F1F8F4] rounded-3xl p-6 sm:p-10 flex items-center mb-8 overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-20 rounded-full -mr-20 -mt-20 blur-3xl" />
      
      <div className="flex flex-col sm:flex-row items-center gap-6 relative z-10">
        <div className="relative group">
          <Avatar className="w-24 h-24 sm:w-32 sm:h-32 border-4 border-white shadow-lg">
            <AvatarImage 
              src={avatarUrl ? (avatarUrl.includes('?') ? avatarUrl : `${avatarUrl}?t=${new Date().getTime()}`) : ''} 
              alt={user.full_name || 'User'} 
            />
            <AvatarFallback className="bg-emerald-100 text-emerald-800 text-2xl font-semibold">
              {user.full_name?.split(' ').map(n => n[0]).join('') || 'U'}
            </AvatarFallback>
          </Avatar>
          
          <label 
            htmlFor="hero-avatar-upload"
            className="absolute bottom-0 right-0 rounded-full w-10 h-10 bg-[#006655] hover:bg-[#005544] text-white border-2 border-white shadow-md transition-transform cursor-pointer flex items-center justify-center group-hover:scale-110"
          >
            {uploading ? (
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" />
            ) : (
                <Pencil className="w-5 h-5" />
            )}
          </label>
          <input 
            id="hero-avatar-upload" 
            type="file" 
            accept="image/*" 
            className="hidden" 
            onChange={handleUpload}
            disabled={uploading}
          />
        </div>

        <div className="text-center sm:text-left flex flex-col gap-1">
          <h1 className="text-2xl sm:text-4xl font-bold text-slate-900 leading-tight">
            {user.full_name || 'User'}
          </h1>
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-slate-500 font-medium">
            <span>{user.location || 'Location'}</span>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span>Member since {joinDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHero;
