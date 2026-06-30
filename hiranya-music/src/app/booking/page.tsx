import { Metadata } from 'next';
import { VARIABLES } from '@/constants/variables';
import BookingClient from './BookingClient';

export const metadata: Metadata = {
  title: 'Contact & Booking',
  description: `Get in touch with ${VARIABLES.artistName} for event bookings, collaborations, and musical inquiries.`,
};

export default function BookingPage() {
  return <BookingClient />;
}
