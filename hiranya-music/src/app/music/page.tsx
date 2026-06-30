import { Metadata } from 'next';
import { VARIABLES } from '@/constants/variables';
import MusicClient from './MusicClient';

export const metadata: Metadata = {
  title: 'Performances',
  description: `Watch ${VARIABLES.artistName}'s violin performances across events, collaborations, and highlights blending Western classical and Sri Lankan traditional music.`,
};

export default function MusicPage() {
  return <MusicClient />;
}
