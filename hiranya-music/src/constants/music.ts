import { VARIABLES } from "./variables";

export const MUSIC_HERO = {
  tagline: "Repertoire",
  titlePart1: "Music & ",
  titlePart2: "Performances",
};

export const MUSIC_CATEGORIES = [
  { id: 'all', name: 'All' },
  { id: 'events', name: 'Events' },
  { id: 'promotions', name: 'Promos & Collabs' },
  { id: 'highlights', name: 'Highlights' },
];

export const MUSIC_WORKS = [
  {
    title: `Beethoven's ${VARIABLES.instrumentTitle} Sonata No. 9`,
    category: "classical",
    type: "audio",
    image: "https://images.unsplash.com/photo-1507838596018-bd7c368cba73?q=80&w=800&auto=format&fit=crop",
    duration: "12:45",
  },
  {
    title: "Danno Budunge (Contemporary Solo)",
    category: "sri-lankan",
    type: "video",
    image: "https://images.unsplash.com/photo-1514481909227-e54abc4da6ad?q=80&w=800&auto=format&fit=crop",
    duration: "4:30",
  },
  {
    title: `Ocean Breeze: ${VARIABLES.instrumentTitle} & Sitar Fusion`,
    category: "fusion",
    type: "audio",
    image: "https://images.unsplash.com/photo-1465804575741-338b8555e02f?q=80&w=800&auto=format&fit=crop",
    duration: "6:15",
  },
  {
    title: "Bach Partita No. 2 Premiere",
    category: "classical",
    type: "video",
    image: "https://images.unsplash.com/photo-1541626395124-219ec94723c1?q=80&w=800&auto=format&fit=crop",
    duration: "8:20",
  },
  {
    title: "Kandy Perahera Rhythms",
    category: "sri-lankan",
    type: "audio",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop",
    duration: "5:10",
  },
  {
    title: `Sunset over Colombo (Electro-${VARIABLES.instrumentTitle})`,
    category: "fusion",
    type: "video",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=800&auto=format&fit=crop",
    duration: "4:55",
  },
];

export const MUSIC_ACTIONS = {
  savePlaylist: "Save to Playlist",
  playNow: "Play Now",
};

export const CULTURAL_FOCUS = {
  tagline: "Cultural Heritage",
  title: `${VARIABLES.countryAdjective} Folk Adaptations`,
  description: `Discover a unique collection of ${VARIABLES.countryAdjective} folk songs (Goyam Kavi, Pathal Kavi) and traditional Vannams reimagined for solo ${VARIABLES.instrument} and chamber ensembles. These works utilize microtonal nuances characteristic of ${VARIABLES.countryAdjective} melody, blended with western harmonic structures.`,
  items: ['Baila Fusion', 'Nurthi Melodies', 'Kandyan Rhythms', 'Modern Film Hits'],
  button: "VIEW SPECIAL COLLECTION",
};
