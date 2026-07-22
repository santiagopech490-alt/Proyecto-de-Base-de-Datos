'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import { getPropertyBySlug } from '@/lib/services/property-service';
import { createBooking, getAvailability } from '@/lib/services/booking-service';
import { PropertySummaryCard } from '@/components/booking/PropertySummaryCard';
import { BookingScheduler } from '@/components/booking/BookingScheduler';
import { BookingSuccessModal } from '@/components/booking/BookingSuccessModal';
import { Availability, Property } from '@/types/booking';
import { LoginRequired } from '@/components/LoginRequired';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function SchedulePage() {
  const params = useParams<{ slug: string }>();
  const { t } = useLanguage();
  const [propertyDetails, setPropertyDetails] = useState<Property | null>(null);
  const [availability, setAvailability] = useState<Availability | null>(null);
  const [user, setUser] = useState<any>(null);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const supabase = createClient();

  useEffect(() => {
    const fetchInitialData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        if (!params.slug) {
          throw new Error('Invalid property identifier.');
        }

        const { data: { user: fetchedUser } } = await supabase.auth.getUser();
        setUser(fetchedUser);
        setCheckingAuth(false);

        if (!fetchedUser) return;

        const fetchedProperty = await getPropertyBySlug(params.slug);
        if (!fetchedProperty) {
          throw new Error('Property not found.');
        }
        setPropertyDetails(fetchedProperty);

        const fetchedAvailability = await getAvailability(fetchedProperty.id, new Date().toISOString().split('T')[0]);
        setAvailability(fetchedAvailability);

      } catch (err: any) {
        console.error('Failed to fetch data:', err);
        setError(err.message || 'Failed to load booking information. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchInitialData();
  }, [params.slug, supabase]);

  const handleBook = async (date: Date, time: string, notes: string) => {
    if (!propertyDetails) {
      setError('Property details not loaded. Cannot book.');
      return;
    }
    if (!user) {
      setError('You must be logged in to book a viewing.');
      return;
    }

    try {
      await createBooking({
        user_id: user.id,
        property_id: propertyDetails.id,
        booking_date_time: date.toISOString(),
        notes,
        status: 'pending'
      });
      setIsModalOpen(true);
    } catch (error: any) {
      console.error('Booking failed:', error);
      const errorMessage = error?.message || 'Failed to book appointment. Please try again.';
      setError(errorMessage);
    }
  };

  if (checkingAuth) {
    return <div className="min-h-screen flex items-center justify-center">Checking authentication...</div>;
  }

  if (!user) {
    return <LoginRequired title="Schedule a Private Viewing" />;
  }

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading booking details...</div>;
  }

  if (error) {
    return <div className="min-h-screen flex items-center justify-center text-red-500">{error}</div>;
  }

  if (!propertyDetails || !availability) {
    return <div className="min-h-screen flex items-center justify-center">No booking information available.</div>;
  }

  return (
    <main className="min-h-screen bg-[#F0F5F5] p-8">
      <div className="max-w-6xl mx-auto">
        <button
          onClick={() => window.history.back()}
          className="flex items-center text-[#006655] mb-8 hover:underline cursor-pointer"
        >
          <span className="material-icons mr-2">arrow_back</span>
          {t("schedulePage.backToProperty")}
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <PropertySummaryCard property={propertyDetails} agentName="Sarah Jenkins" />

          <div className="bg-white p-8 rounded-xl shadow-sm border border-border/10">
            <h1 className="text-3xl font-bold text-nordic mb-2">{t("schedulePage.scheduleViewingTitle")}</h1>
            <p className="text-nordic/70 mb-8">{t("schedulePage.scheduleViewingSubtitle")}</p>
            <BookingScheduler availability={availability} onBook={handleBook} />
          </div>
        </div>
      </div>

      <BookingSuccessModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
}
