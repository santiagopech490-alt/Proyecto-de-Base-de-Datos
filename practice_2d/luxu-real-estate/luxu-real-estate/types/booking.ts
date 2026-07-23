export interface Booking {
  id?: string;
  user_id: string;
  property_id: string;
  booking_date_time: string;
  notes?: string;
  status?: string;
  created_at?: string;
  updated_at?: string;
}

export interface Slot {
  time: string;
  isAvailable: boolean;
}

export interface Availability {
  date: string;
  slots: Slot[];
}

export interface Property {
  id: string;
  slug: string;
  title: string;
  price: number | string;
  location: string;
  address?: string;
  beds: number;
  baths: number;
  sqft: number;
  garage?: number;
  description?: string;
  amenities?: string[];
  images: string[];
  agentId?: string;
  status?: string;
}
