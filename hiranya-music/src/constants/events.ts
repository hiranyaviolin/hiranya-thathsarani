import { VARIABLES } from "./variables";

export const EVENTS_HERO = {
  tagline: "Live",
  titlePart1: "Events & ",
  titlePart2: "Concerts",
  description: "Experience the magic of live performance. From grand concert halls to intimate garden settings.",
};

export const UPCOMING_EVENTS = {
  title: "Upcoming Engagements",
  getTickets: "GET TICKETS",
  list: [
    {
      date: "MAR 15, 2024",
      time: "7:00 PM",
      title: "Classical Strings Evening",
      venue: "Lionel Wendt Art Centre",
      location: `Colombo, ${VARIABLES.country}`,
      type: "Concert",
      price: "LKR 3,500 upwards",
    },
    {
      date: "APR 02, 2024",
      time: "6:30 PM",
      title: "Fusion Night: Violin & Tabla",
      venue: "Galle Face Hotel",
      location: `Colombo, ${VARIABLES.country}`,
      type: "Performance",
      price: "RSVP Required",
    },
  ],
};

export const PAST_EVENTS = {
  title: "Past Performances",
  list: [
    {
      title: "Symphony of the Indian Ocean",
      venue: "BMICH Main Hall",
      date: "DEC 2023",
      image: "https://images.unsplash.com/photo-1514481909227-e54abc4da6ad?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Kandy Festival Recital",
      venue: "Queen's Hotel",
      date: "AUG 2023",
      image: "https://images.unsplash.com/photo-1507838596018-bd7c368cba73?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Colombo Jazz Fusion",
      venue: "Barefoot Garden Cafe",
      date: "JUN 2023",
      image: "https://images.unsplash.com/photo-1541626395124-219ec94723c1?q=80&w=800&auto=format&fit=crop",
    },
  ],
};
