export type BookingStatus = 'pending' | 'confirmed' | 'cancelled' | 'completed';

export interface Booking {
  id: string;
  user_id: string;
  property_id: string;
  booking_date_time: string;
  notes?: string;
  status: BookingStatus;
  created_at: string;
  updated_at: string;
}

export interface TimeSlot {
  time: string; // e.g., "09:00 AM"
  isAvailable: boolean;
}

export interface Availability {
  date: string; // ISO date string
  slots: TimeSlot[];
}
