import { VARIABLES } from "./variables";

export const BIOGRAPHY = {
  tagline: "Biography",
  title: VARIABLES.artistName,
  subtitle: `${VARIABLES.instrumentTitle}, Performer, & Artist`,
  description1: "I am Hiranya Thathsarani, a creative violinist from Sri Lanka who expresses emotions and imagination through my music. My journey is rooted in classical foundations, but I love exploring new and expressive ways to bring each piece to life. For me, music is not just performance. It is storytelling, where every note carries feeling and meaning. I constantly push myself to be more creative, aiming to create performances that connect deeply and leave a lasting impression on my audience.",
  description2: `Today, she is recognized as one of the most versatile violinists of her generation, moving effortlessly between the rigorous demands of a Bach Chaconne and the soulful, fluid nuances of a Sinhala folk ballad.`,
  stats: [
    { value: "64k+", label: "Followers" },
    { value: "20+", label: "Shows Performed" },
  ],
};

export const PHILOSOPHY = {
  title: "Musical Philosophy",
  items: [
    {
      title: "Emotion Over Perfection",
      description: `Technical mastery is merely a tool. True music happens when the violinist disappears and only the emotion remains, speaking directly to the listener's soul.`,
    },
    {
      title: "Bridging Cultures",
      description: "Music is a universal language. By blending different traditions, we find common humanity and create something entirely new and beautiful.",
    },
  ],
};

export const JOURNEY = {
  title: "My Journey",
  milestones: [
    { year: '2008', title: 'Musical Beginnings', description: 'Started formal training in Colombo, showing early promise in classical repertoire.' },
    { year: '2015', title: 'International Debut', description: 'Performed as a soloist with a prestigious regional youth orchestra.' },
    { year: '2019', title: 'Cultural Synthesis', description: `Released "Lankan Strings," a groundbreaking album blending folk with jazz-${VARIABLES.instrument}.` },
    { year: '2023', title: 'Global Recognition', description: 'Artist-in-residence at a prominent European conservatoire.' },
  ],
};

export const LESSONS = {
  title: `${VARIABLES.instrumentTitle} Lessons`,
  description: `${VARIABLES.artistName} offers personalized ${VARIABLES.instrument} instruction for students of all ages. Her methodology focuses on healthy technique, musicality, and finding joy in practice.`,
  features: [
    "Virtual & In-person",
    "Holistic Approach",
  ],
  buttonText: "Enquire about Lessons",
};
