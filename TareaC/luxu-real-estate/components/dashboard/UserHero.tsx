import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Pencil } from 'lucide-react';

interface UserHeroProps {
  user: {
    full_name: string | null;
    location: string | null;
    member_since: string | null;
    avatar_url: string | null;
  };
}

const UserHero: React.FC<UserHeroProps> = ({ user }) => {
  const joinDate = user.member_since 
    ? new Date(user.member_since).getFullYear() 
    : '2021';

  return (
    <div className="relative w-full h-48 sm:h-64 bg-gradient-to-r from-[#E2F1E7] to-[#F1F8F4] rounded-3xl p-6 sm:p-10 flex items-center mb-8 overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-20 rounded-full -mr-20 -mt-20 blur-3xl" />
      
      <div className="flex flex-col sm:flex-row items-center gap-6 relative z-10">
        <div className="relative group">
          <Avatar className="w-24 h-24 sm:w-32 sm:h-32 border-4 border-white shadow-lg">
            <AvatarImage src={user.avatar_url || ''} alt={user.full_name || 'User'} />
            <AvatarFallback className="bg-emerald-100 text-emerald-800 text-2xl font-semibold">
              {user.full_name?.split(' ').map(n => n[0]).join('') || 'U'}
            </AvatarFallback>
          </Avatar>
          
          <Button 
            size="icon" 
            variant="secondary"
            className="absolute bottom-0 right-0 rounded-full w-8 h-8 sm:w-10 sm:h-10 bg-[#006655] hover:bg-[#005544] text-white border-2 border-white shadow-md transition-transform group-hover:scale-110"
            aria-label="Edit Profile"
          >
            <Pencil className="w-4 h-4 sm:w-5 sm:h-5" />
          </Button>
        </div>

        <div className="text-center sm:text-left flex flex-col gap-1">
          <h1 className="text-2xl sm:text-4xl font-bold text-slate-900 leading-tight">
            {user.full_name || 'Elena Richardson'}
          </h1>
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-slate-500 font-medium">
            <span>{user.location || 'San Francisco, CA'}</span>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span>Member since {joinDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHero;
