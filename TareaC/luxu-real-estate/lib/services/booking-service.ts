import { Booking, Availability } from '../../types/booking';
import { supabase } from '../supabase';

export async function createBooking(booking: Omit<Booking, 'id' | 'created_at' | 'updated_at'>): Promise<Booking> {
  const { data, error } = await supabase
    .from('appointments') // Changed from 'bookings' to 'appointments'
    .insert([booking])
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function getAvailability(propertyId: string, date: string): Promise<Availability> {
  // Simulating availability for now as per plan
  const slots = [
    { time: '09:00 AM', isAvailable: true },
    { time: '09:30 AM', isAvailable: true },
    { time: '10:00 AM', isAvailable: true },
    { time: '10:30 AM', isAvailable: true },
    { time: '11:30 AM', isAvailable: true },
    { time: '01:00 PM', isAvailable: false },
    { time: '02:00 PM', isAvailable: true },
    { time: '03:30 AM', isAvailable: true },
  ];
  return { date, slots };
}
