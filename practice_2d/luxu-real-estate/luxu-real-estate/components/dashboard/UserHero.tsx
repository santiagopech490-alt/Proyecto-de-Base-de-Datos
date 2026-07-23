'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Pencil } from 'lucide-react';
import { storageService } from '@/lib/storage-service';
import { createClient } from '@/lib/supabase/client';
import { toast } from 'sonner';
import { useLanguage } from '@/lib/i18n/LanguageContext';

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
  const { t, language } = useLanguage();

  const [avatarUrl, setAvatarUrl] = useState<string | null>(user.avatar_url);
  const [fullName, setFullName] = useState<string>(user.full_name || 'User');
  const [location, setLocation] = useState<string>(user.location || 'Beverly Hills, CA');
  const [uploading, setUploading] = useState(false);
  
  const joinDate = user.member_since 
    ? new Date(user.member_since).getFullYear() 
    : '2021';

  useEffect(() => {
    const savedAvatar = localStorage.getItem('luxe_user_avatar');
    if (savedAvatar) {
      setAvatarUrl(savedAvatar);
    } else if (user.avatar_url) {
      setAvatarUrl(user.avatar_url);
    }

    const savedProfileStr = localStorage.getItem('luxe_demo_profile');
    if (savedProfileStr) {
      try {
        const parsed = JSON.parse(savedProfileStr);
        if (parsed.full_name) setFullName(parsed.full_name);
        if (parsed.location) setLocation(parsed.location);
      } catch {}
    } else {
      if (user.full_name) setFullName(user.full_name);
      if (user.location) setLocation(user.location);
    }
  }, [user.avatar_url, user.full_name, user.location]);

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      setUploading(true);
      const newUrl = await storageService.uploadAvatar(user.id, file);
      
      if (!newUrl) throw new Error('Upload failed');

      setAvatarUrl(newUrl);
      localStorage.setItem('luxe_user_avatar', newUrl);

      try {
        await supabase
          .from('profiles')
          .update({ avatar_url: newUrl })
          .eq('id', user.id);
      } catch (dbErr) {
        console.warn("DB update skipped or warning:", dbErr);
      }

      toast.success(language === 'es' ? '¡Foto de perfil actualizada con éxito!' : 'Avatar updated successfully!');
    } catch (error: any) {
      console.error("Avatar upload error:", error);
      toast.error(language === 'es' ? 'Error al actualizar la foto de perfil.' : 'Failed to update avatar.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="relative w-full h-48 sm:h-64 bg-gradient-to-r from-[#E2F1E7] to-[#F1F8F4] rounded-3xl p-6 sm:p-10 flex items-center mb-8 overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-20 rounded-full -mr-20 -mt-20 blur-3xl" />
      
      <div className="flex flex-col sm:flex-row items-center gap-6 relative z-10 w-full">
        <div className="relative group">
          <Avatar className="w-24 h-24 sm:w-32 sm:h-32 border-4 border-white shadow-lg">
            <AvatarImage 
              src={avatarUrl || ''} 
              alt={fullName} 
            />
            <AvatarFallback className="bg-emerald-100 text-emerald-800 text-2xl font-semibold">
              {fullName?.split(' ').map(n => n[0]).join('') || 'U'}
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

        <div className="text-center sm:text-left flex flex-col gap-1 flex-1">
          <h1 className="text-2xl sm:text-4xl font-bold text-slate-900 leading-tight">
            {fullName}
          </h1>
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-slate-500 font-medium">
            <span>{location}</span>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span>{t("profile.memberSince")} {joinDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHero;
