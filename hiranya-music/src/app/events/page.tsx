import { Metadata } from 'next';
import { VARIABLES } from '@/constants/variables';
import EventsClient from './EventsClient';

export const metadata: Metadata = {
  title: 'Events',
  description: `Stay updated with ${VARIABLES.artistName}'s upcoming performances, concerts, and past events.`,
};

export default function EventsPage() {
  return <EventsClient />;
}
