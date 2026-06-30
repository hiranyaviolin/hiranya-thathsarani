import { Metadata } from 'next';
import { VARIABLES } from '@/constants/variables';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'About',
  description: `Learn about ${VARIABLES.artistName}'s musical journey, philosophy, and extensive background in classical and traditional Sri Lankan music.`,
};

export default function AboutPage() {
  return <AboutClient />;
}
