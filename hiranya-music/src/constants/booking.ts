import { VARIABLES } from "./variables";

export const BOOKING_HERO = {
  tagline: "Engagement",
  titlePart1: "Booking & ",
  titlePart2: "Collaborations",
  description: "Whether it's a grand concert, an intimate wedding, or a studio recording, bring a touch of elegance and soul to your project.",
};

export const CONTACT_INFO = {
  title: "Get in Touch",
  emailLabel: "Email",
  emailValue: VARIABLES.email,
  phoneLabel: "Phone / WhatsApp",
  phoneValue: VARIABLES.phone,
  instagramLabel: "Instagram",
  instagramValue: VARIABLES.instagram,
  facebookLabel: "Facebook",
  facebookValue: "Hiranya Thathsarani",
  youtubeLabel: "YouTube",
  youtubeValue: "@hiranya_violin",
  spotifyLabel: "Spotify",
  spotifyValue: "Hiranya Violin",
  tiktokLabel: "TikTok",
  tiktokValue: "@hiranya_violin",
};

export const INSTANT_INQUIRY = {
  title: "Instant Inquiry",
  description: "Prefer a quick chat? Type your message below and send it directly via WhatsApp.",
  placeholder: `Hi ${VARIABLES.artistName}, I'd like to inquire about...`,
  buttonText: "SEND VIA WHATSAPP",
};

export const BOOKING_FORM = {
  successAlert: `Thank you for your inquiry! ${VARIABLES.artistName} will get back to you soon.`,
  fullNameLabel: "Full Name",
  fullNamePlaceholder: "Enter your name",
  emailLabel: "Email Address",
  emailPlaceholder: "Enter your email",
  eventTypeLabel: "Event Type",
  eventDateLabel: "Event Date",
  detailsLabel: "Inquiry Details",
  detailsPlaceholder: "Tell us about your event or project...",
  submitButton: "SEND ENQUIRY",
  eventOptions: [
    "Private Event",
    "Concert / Solo Recital",
    "Wedding Ceremony",
    "Recording / Studio",
    "Other Collaboration",
  ],
};
