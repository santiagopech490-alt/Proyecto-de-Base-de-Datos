'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { supabase } from '@/lib/supabase'; // Import supabase client
import { getPropertyBySlug } from '@/lib/services/property-service';
import { createBooking, getAvailability } from '@/lib/services/booking-service'; // Explicitly ensure createBooking is imported
import { PropertySummaryCard } from '@/components/booking/PropertySummaryCard';
import { BookingScheduler } from '@/components/booking/BookingScheduler';
import { BookingSuccessModal } from '@/components/booking/BookingSuccessModal';
import { Availability, Property } from '@/types/booking';
import { User } from '@supabase/supabase-js'; // Import User type for mocking

export default function SchedulePage() {
  const params = useParams<{ slug: string }>();
  const [propertyDetails, setPropertyDetails] = useState<Property | null>(null);
  const [availability, setAvailability] = useState<Availability | null>(null);
  const [currentUser, setCurrentUser] = useState<User | null>(null); // State for the current user
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInitialData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        if (!params.slug) {
          throw new Error('Invalid property identifier.');
        }

        // --- Fetch User ---
        // Bypass login check for testing:
        let fetchedUser = null;
        try {
          const { data: { user } } = await supabase.auth.getUser();
          fetchedUser = user;
        } catch (err: any) {
          console.warn('Could not fetch actual user, proceeding with mock user for testing:', err);
          // Fallback to mock user if actual user fetch fails or returns null
        }

        if (!fetchedUser) {
          // If no actual user, use a mock user for testing purposes
          const mockTestUser: User = {
            id: 'mock-test-user-id',
            email: 'mocktest@example.com',
            app_metadata: {},
            user_metadata: {},
            created_at: '',
            aud: '',
            role: 'authenticated',
            exp: 0,
          };
          setCurrentUser(mockTestUser);
          setError(null); // Clear error if mock user is set for bypass
        } else {
          setCurrentUser(fetchedUser);
        }

        // --- Fetch Property Details ---
        const fetchedProperty = await getPropertyBySlug(params.slug);
        if (!fetchedProperty) {
          throw new Error('Property not found.');
        }
        setPropertyDetails(fetchedProperty);

        // --- Fetch Availability ---
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
  }, [params.slug]); // Re-fetch if slug changes

  const handleBook = async (date: Date, time: string, notes: string) => {
    if (!propertyDetails) {
      setError('Property details not loaded. Cannot book.');
      return;
    }
    if (!currentUser) {
      // This check ensures we have a user (real or mock) before proceeding.
      setError('User not identified. Cannot book.');
      return;
    }

    try {
      // Log the user_id being passed to createBooking
      console.log('Attempting to book with user_id:', currentUser.id); 
      
      // createBooking is available here due to the import from '@/lib/services/booking-service'
      await createBooking({
        user_id: currentUser.id, // Use actual or mock user ID from state
        property_id: propertyDetails.id, // Use actual property ID
        booking_date_time: date.toISOString(),
        notes,
        status: 'pending'
      });
      setIsModalOpen(true);
    } catch (error: any) {
      // Log the raw error object to the console for debugging
      console.log('Raw error from createBooking:', error); 
      console.error('Booking failed:', error);
      
      // Attempt to provide a more detailed error message if available
      const errorMessage = error?.message || // Try error.message first
                           (typeof error === 'object' && Object.keys(error).length > 0 ? JSON.stringify(error) : 'Failed to book appointment. Please try again.');
      setError(errorMessage);
    }
  };

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
          className="flex items-center text-mosque mb-8 hover:underline"
        >
          <span className="material-icons mr-2">arrow_back</span>
          Back to property details
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <PropertySummaryCard property={propertyDetails} agentName="Sarah Jenkins" />

          <div className="bg-white p-8 rounded-xl shadow-sm border border-border/10">
            <h1 className="text-3xl font-bold text-nordic mb-2">Schedule a Viewing</h1>
            <p className="text-nordic/70 mb-8">Choose a date and time to tour the property in person.</p>
            <BookingScheduler availability={availability} onBook={handleBook} />
          </div>
        </div>
      </div>

      <BookingSuccessModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
}
