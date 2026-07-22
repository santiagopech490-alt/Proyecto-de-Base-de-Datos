import React from 'react';
import UserHero from '@/components/dashboard/UserHero';
import QuickStats from '@/components/dashboard/QuickStats';
import DashboardTabs from '@/components/dashboard/DashboardTabs';
import SavedPropertiesGrid from '@/components/dashboard/SavedPropertiesGrid';
import UpcomingVisitsList from '@/components/dashboard/UpcomingVisitsList';
import ProfileSettingsForm from '@/components/dashboard/ProfileSettingsForm';
import { userDashboardService } from '@/lib/user-dashboard-service';
import { createClient } from '@/lib/supabase/server';
import { LoginRequired } from '@/components/LoginRequired';
import { cookies } from 'next/headers';

export default async function ProfilePage() {
  const cookieStore = await cookies();
  const hasAuthCookie = cookieStore.get('luxe_auth')?.value === 'true';
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user && !hasAuthCookie) return <LoginRequired title="Your Luxury Dashboard" />;
  
  const userId = user?.id || '00000000-0000-0000-0000-000000000001';

  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single();

  const activeProfile = profile || {
    id: userId,
    full_name: 'Demo Admin User',
    email: 'demo.admin@gmail.com',
    location: 'Beverly Hills, CA',
    member_since: '2023',
    avatar_url: '',
    role: 'Admin',
    status: 'Active',
    properties_count: 5
  };

  const [favorites, visits] = await Promise.all([
    userDashboardService.getFavorites(userId).catch(err => {
      console.error("Favorites fetch failed, skipping for now:", err);
      return [];
    }),
    userDashboardService.getAppointments(userId).catch(err => {
      console.error("Appointments fetch failed, skipping for now:", err);
      return [];
    })
  ]);

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="relative">
        <UserHero user={{...activeProfile, id: userId}} />
        <QuickStats stats={{ 
          saved: favorites.length, 
          visits: visits.length, 
          sold: activeProfile.properties_count || 0 
        }} />
      </div>

      <DashboardTabs children={{
        saved: <SavedPropertiesGrid properties={favorites} />,
        visits: <UpcomingVisitsList visits={visits} />,
        settings: <ProfileSettingsForm userId={userId} defaultValues={{
          full_name: activeProfile.full_name || '',
          location: activeProfile.location || '',
          email_notifications: activeProfile.email_notifications ?? true,
          push_notifications: activeProfile.push_notifications ?? true,
          sms_notifications: activeProfile.sms_notifications ?? true,
        }} />
      }} />
    </div>
  );
}
