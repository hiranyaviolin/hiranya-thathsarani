import { VARIABLES } from "./variables";

export const HERO = {
  tagline: "Soul in Strings",
  titlePart1: "The Soul of ",
  titlePart2: VARIABLES.countryAdjective,
  titlePart3: ` ${VARIABLES.instrumentTitle} Mastery`,
  descriptionPart1: "Bridging the timeless elegance of Sri Lankan traditions with the ",
  descriptionPart2: `${VARIABLES.country}'s musical heritage.`,
  bookButton: "BOOK A PERFORMANCE",
  listenButton: "LISTEN TO MUSIC",
  scroll: "Scroll",
};

export const ABOUT_TEASER = {
  tagline: "The Artist",
  titlePart1: "Harmonizing Traditions, ",
  titlePart2: "Inspiring Souls",
  description: `Born and raised in the vibrant musical landscape of ${VARIABLES.country}, ${VARIABLES.artistName} has dedicated her life to the ${VARIABLES.instrument}. Her journey began with rigorous Western Classical training, but her soul found its truest expression in the melodies of her home.`,
  quote: `"Music is the bridge between the heart and the heritage."`,
  button: "DISCOVER THE JOURNEY",
  highlights: [
    {
      title: "Classical Mastery",
      description: `Advanced training in Western Classical ${VARIABLES.instrument} with a focus on emotive performance.`,
    },
    {
      title: "Cultural Fusion",
      description: `Pioneering work in adapting ${VARIABLES.countryAdjective} folk and cinematic music for the ${VARIABLES.instrument}.`,
    },
    {
      title: "Teaching Legacy",
      description: `Dedicated to nurturing the next generation of violinists in ${VARIABLES.country}.`,
    },
  ],
};

export const SRI_LANKAN_FOCUS = {
  tagline: `${VARIABLES.countryAdjective} Resonance`,
  title: "A Focus on Local Roots",
  description: `Highlighting ${VARIABLES.instrument} adaptations of folk songs, traditional vannams, and contemporary ${VARIABLES.countryAdjective} film music. Experience the fusion of global sound and local soul.`,
  bgText: VARIABLES.country.toUpperCase(),
  exploreLink: `EXPLORE ${VARIABLES.countryAdjective.toUpperCase()} FUSION`,
  tracks: [
    {
      title: "Gajaga Vannama (Violin Solo)",
      category: "Folk Adaptation",
      duration: "4:20",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Vikasitha Pem (Violin Fusion)",
      category: "Film Music",
      duration: "5:15",
      image: "https://images.unsplash.com/photo-1507838596018-bd7c368cba73?q=80&w=800&auto=format&fit=crop",
    },
  ],
};

export const EVENTS_TEASER = {
  tagline: "Performances",
  title: "Upcoming Engagements",
  viewAll: "VIEW ALL EVENTS",
  tickets: "TICKETS",
  upcomingEvents: [
    {
      date: "MAR 15",
      title: "Classical Strings Evening",
      venue: "Lionel Wendt Art Centre",
      location: `Colombo, ${VARIABLES.country}`,
      type: "Concert",
    },
    {
      date: "APR 02",
      title: "Fusion Night: Violin & Tabla",
      venue: "Galle Face Hotel",
      location: `Colombo, ${VARIABLES.country}`,
      type: "Performance",
    },
    {
      date: "MAY 20",
      title: "Symphony of the Indian Ocean",
      venue: "BMICH Main Hall",
      location: `Colombo, ${VARIABLES.country}`,
      type: "Soloist Appearance",
    },
  ],
};

export const CTA = {
  title: "Create Magical Moments Together",
  description: `Available for private events, concert hall performances, recordings, and international collaborations. Let's bring the soul of the ${VARIABLES.instrument} to your next project.`,
  enquireButton: "ENQUIRE NOW",
  whatsappButton: "WHATSAPP ME",
};
