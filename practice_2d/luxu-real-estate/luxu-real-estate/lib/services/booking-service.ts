import { Booking, Availability } from '../../types/booking';
import { supabase } from '../supabase';

export async function createBooking(booking: Omit<Booking, 'id' | 'created_at' | 'updated_at'>): Promise<any> {
  const newAppointment = {
    id: Math.random().toString(36).substring(2, 9),
    ...booking,
    created_at: new Date().toISOString()
  };

  // 1. Save in local storage so it immediately reflects in the User Profile "Visitas Agendadas" tab
  if (typeof window !== 'undefined') {
    const existing = localStorage.getItem('luxe_user_appointments');
    const list = existing ? JSON.parse(existing) : [];
    list.unshift(newAppointment);
    localStorage.setItem('luxe_user_appointments', JSON.stringify(list));
  }

  // 2. Attempt Supabase DB insertion into appointments or bookings table
  try {
    const { data, error } = await supabase
      .from('appointments')
      .insert([{
        user_id: (booking.user_id && booking.user_id.length > 20) ? booking.user_id : null,
        property_id: (booking.property_id && booking.property_id.length > 20) ? booking.property_id : null,
        booking_date_time: booking.booking_date_time,
        notes: booking.notes,
        status: booking.status || 'pending'
      }])
      .select();

    if (!error && data) return data[0];
  } catch (err) {
    console.warn("Supabase appointments insert warning:", err);
  }

  return newAppointment;
}

export async function getAvailability(propertyId: string, date: string): Promise<Availability> {
  const slots = [
    { time: '09:00 AM', isAvailable: true },
    { time: '09:30 AM', isAvailable: true },
    { time: '10:00 AM', isAvailable: true },
    { time: '10:30 AM', isAvailable: true },
    { time: '11:30 AM', isAvailable: true },
    { time: '01:00 PM', isAvailable: false },
    { time: '02:00 PM', isAvailable: true },
    { time: '03:30 PM', isAvailable: true },
  ];
  return { date, slots };
}
