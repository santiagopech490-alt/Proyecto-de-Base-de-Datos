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

export default async function ProfilePage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return <LoginRequired title="Your Luxury Dashboard" />;
  
  console.log("Authenticated User ID:", user.id);

  const { data: profile, error: profileError } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single();

  console.log("Profile Query Result:", { profile, profileError });

  const [favorites, visits] = await Promise.all([
    userDashboardService.getFavorites(user.id).catch(err => {
      console.error("Favorites fetch failed, skipping for now:", err);
      return [];
    }),
    userDashboardService.getAppointments(user.id).catch(err => {
      console.error("Appointments fetch failed, skipping for now:", err);
      return [];
    })
  ]);

  if (!profile) return <div>Profile not found</div>;

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="relative">
        <UserHero user={{...profile, id: user.id}} />
        <QuickStats stats={{ 
          saved: favorites.length, 
          visits: visits.length, 
          sold: profile.properties_count || 0 
        }} />
      </div>

      <DashboardTabs children={{
        saved: <SavedPropertiesGrid properties={favorites} />,
        visits: <UpcomingVisitsList visits={visits} />,
        settings: <ProfileSettingsForm userId={user.id} defaultValues={{
          full_name: profile.full_name || '',
          location: profile.location || '',
          email_notifications: profile.email_notifications ?? true,
          push_notifications: profile.push_notifications ?? true,
          sms_notifications: profile.sms_notifications ?? true,
        }} />
      }} />
    </div>
  );
}
