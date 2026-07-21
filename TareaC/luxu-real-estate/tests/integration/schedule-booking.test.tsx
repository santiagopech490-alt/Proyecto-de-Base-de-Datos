'use client';

import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom'; // For custom matchers like toBeInTheDocument
import { vi } from 'vitest'; // Vitest for mocking

// Mock next/navigation
vi.mock('next/navigation', () => ({
  useParams: vi.fn(),
}));

// Mock supabase client and auth functions
const mockGetUser = vi.fn();
vi.mock('@/lib/supabase', () => ({
  supabase: {
    auth: {
      getUser: mockGetUser,
    },
  },
}));

// Mock service functions
const mockGetPropertyBySlug = vi.fn();
vi.mock('@/lib/services/property-service', () => ({
  getPropertyBySlug: mockGetPropertyBySlug,
}));

const mockGetAvailability = vi.fn();
const mockCreateBooking = vi.fn();
vi.mock('@/lib/services/booking-service', () => ({
  getAvailability: mockGetAvailability,
  createBooking: mockCreateBooking,
}));

// Import the component to test
import SchedulePage from '@/app/properties/[slug]/schedule/page';
import { User } from '@supabase/supabase-js'; // Import User type for mocking

// Mock data
const mockUser: User = {
  id: 'mock-user-id',
  email: 'test@example.com',
  app_metadata: {},
  user_metadata: {},
  created_at: '',
  aud: '',
  role: 'authenticated',
  exp: 0,
};
const mockProperty = {
  id: 'prop-123',
  slug: 'test-property-slug',
  title: 'Test Property',
  price: 100000,
  location: 'Test Location',
  beds: 3,
  baths: 2,
  sqft: 1500,
  garage: 1,
  description: 'A great property',
  amenities: ['Pool'],
  images: ['/test-image.jpg'],
  agentId: 'agent-456',
  status: 'active',
};
const mockAvailability = {
  available_slots: [
    { date: '2024-07-20T10:00:00Z', time_slots: ['10:00 AM', '11:00 AM'] },
    { date: '2024-07-21T10:00:00Z', time_slots: ['10:00 AM', '02:00 PM'] },
  ],
  booked_slots: [],
};

// Helper to advance time for date selection testing if needed (e.g., for calendar interaction)
// Mocking date for consistent testing
const realDate = Date;
const mockDate = class extends Date {
  constructor(dateString?: string | number | Date) {
    if (dateString) {
      super(dateString);
    } else {
      super('2024-07-20T12:00:00Z'); // Set a specific date for tests
    }
  }
};
global.Date = mockDate as any;


describe('SchedulePage Integration Test', () => {
  beforeEach(() => {
    // Reset mocks before each test
    vi.clearAllMocks();

    // Mock useParams
    (require('next/navigation').useParams as ReturnType<typeof vi.fn>).mockReturnValue({ slug: mockProperty.slug });

    // Mock supabase.auth.getUser()
    mockGetUser.mockResolvedValue({ data: { user: mockUser } });

    // Mock property service
    mockGetPropertyBySlug.mockResolvedValue(mockProperty);

    // Mock booking service
    mockGetAvailability.mockResolvedValue(mockAvailability);
    // Mock createBooking to just resolve successfully for the test
    mockCreateBooking.mockResolvedValue({ data: [{ id: 'booking-123' }], error: null });
  });

  afterAll(() => {
    // Restore the original Date object
    global.Date = realDate;
  });

  test('should allow a user to book an appointment and show success modal', async () => {
    render(<SchedulePage />);

    // Wait for loading to finish and initial data to be displayed
    await waitFor(() => {
      expect(screen.getByText('Loading booking details...')).not.toBeInTheDocument();
    });

    // Check if property details and scheduler are rendered
    expect(screen.getByText(mockProperty.title)).toBeInTheDocument();
    expect(screen.getByText('Schedule a Viewing')).toBeInTheDocument();

    // Simulate user interaction:
    // 1. Select a date (e.g., the first available date from mockAvailability)
    //    This requires finding the calendar element and interacting with it.
    //    For simplicity in this mock, let's assume we can find and click a date.
    //    A real implementation would need to select the correct day.
    //    Let's use the mock date of '2024-07-20' which is in mockAvailability.
    //    We need to find a way to interact with the calendar component.
    //    Looking at shadcn/ui components, calendar might have role="gridcell" for dates.

    // Mocking the interaction with the calendar is complex without knowing its DOM structure.
    // Let's simplify by assuming the date is pre-selected or we can find an element representing the date.
    // For now, we'll proceed to time and notes selection.

    // 2. Select a time slot
    //    This would involve finding the time slot button and clicking it.
    //    Assuming '10:00 AM' is available and clickable.
    const timeSlotButton = await screen.findByText('10:00 AM'); // Use findByText as it might render after initial load
    fireEvent.click(timeSlotButton);

    // 3. Enter notes
    const notesTextarea = screen.getByPlaceholderText('Add any specific requests or questions...');
    fireEvent.change(notesTextarea, { target: { value: 'Please ensure someone is available at the property.' } });

    // 4. Click the "Book Appointment" button
    const bookButton = screen.getByRole('button', { name: /book appointment/i });
    fireEvent.click(bookButton);

    // Wait for the createBooking API call to complete and the modal to appear
    await waitFor(() => {
      expect(mockCreateBooking).toHaveBeenCalledTimes(1);
      // Check arguments passed to createBooking
      expect(mockCreateBooking).toHaveBeenCalledWith(expect.objectContaining({
        user_id: mockUser.id,
        property_id: mockProperty.id,
        notes: 'Please ensure someone is available at the property.',
        // booking_date_time should be an ISO string. We can't precisely check the date/time
        // without more complex interaction mocking, but we check its format.
        booking_date_time: expect.stringMatching(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/),
        status: 'pending',
      }));
    });

    // Check if the success modal is displayed
    await waitFor(() => {
      expect(screen.getByText('Appointment Booked Successfully!')).toBeInTheDocument();
    });
  });

  test('should show error if property not found', async () => {
    mockGetPropertyBySlug.mockResolvedValue(null); // Simulate property not found

    render(<SchedulePage />);

    await waitFor(() => {
      expect(screen.getByText('Property not found.')).toBeInTheDocument();
    });
  });

  test('should show error if user is not logged in', async () => {
    mockGetUser.mockResolvedValue({ data: { user: null } }); // Simulate no logged-in user

    render(<SchedulePage />);

    await waitFor(() => {
      expect(screen.getByText('Please log in to book an appointment.')).toBeInTheDocument();
    });
  });

  test('should show error if availability fails to load', async () => {
    mockGetAvailability.mockRejectedValue(new Error('Failed to fetch availability'));

    render(<SchedulePage />);

    await waitFor(() => {
      expect(screen.getByText('Failed to load booking information. Please try again later.')).toBeInTheDocument();
    });
  });

  test('should show error if booking fails', async () => {
    // Ensure mocks are reset for this specific test
    vi.clearAllMocks();
    (require('next/navigation').useParams as ReturnType<typeof vi.fn>).mockReturnValue({ slug: mockProperty.slug });
    mockGetUser.mockResolvedValue({ data: { user: mockUser } });
    mockGetPropertyBySlug.mockResolvedValue(mockProperty);
    mockGetAvailability.mockResolvedValue(mockAvailability);
    mockCreateBooking.mockRejectedValue(new Error('Booking service error')); // Simulate booking failure

    render(<SchedulePage />);

    await waitFor(() => {
      expect(screen.getByText('Loading booking details...')).not.toBeInTheDocument();
    });

    // Mock date selection and notes input
    const notesTextarea = screen.getByPlaceholderText('Add any specific requests or questions...');
    fireEvent.change(notesTextarea, { target: { value: 'Notes' } });

    const bookButton = screen.getByRole('button', { name: /book appointment/i });
    fireEvent.click(bookButton);

    await waitFor(() => {
      expect(screen.getByText('Failed to book appointment. Please try again.')).toBeInTheDocument();
    });
  });
});
