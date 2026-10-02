import { VARIABLES } from "./variables";

export const NAVBAR = {
  brand: VARIABLES.artistName.toUpperCase(),
  brandSubtitle: VARIABLES.instrumentTitle,
  bookNow: "CONTACT",
  links: [
    { name: 'Home', href: '/' },
    // { name: 'About', href: '/about' },
    { name: 'Performances', href: '/music' },
    { name: 'Notations', href: '/notations' },
    // { name: 'Gallery', href: '/gallery' },
    // { name: 'Lessons', href: '/lessons' },
    // { name: 'Contact', href: '/booking' },
  ],
};

export const FOOTER = {
  brand: VARIABLES.artistName.toUpperCase(),
  brandDescription: "A creative violinist from Sri Lanka who expresses emotions and imagination through music",
  // navTitle: "Navigation",
  // navItems: ['Home', 'About', 'Music', 'Events', 'Lessons'],
  navTitle: "Navigation",
  navItems: ['Home', 'About', 'Music', 'Notations', 'Contact'],
  contactTitle: "Contact",
  bookEventsLink: "Book for Events →",
  // newsletterTitle: "Newsletter",
  // newsletterText: "Stay updated with upcoming concerts and new releases.",
  // newsletterPlaceholder: "Your email address",
  // newsletterSubscribe: "Subscribe",
  youtubeTitle: "Subscribe on YouTube",
  youtubeText: "Join my channel for new releases, covers, and live performances.",
  youtubeSubscribeBtn: "Subscribe",
  socialText: "Also follow me on:",
  copyright: `© 2026 Hiranya Thathsarani. All Rights Reserved.`,
  privacyPolicy: "Privacy Policy",
  termsOfService: "Terms of Service",
};
