import { VARIABLES } from "./variables";

export const NAVBAR = {
  brand: VARIABLES.artistName.toUpperCase(),
  brandSubtitle: VARIABLES.instrumentTitle,
  bookNow: "CONTACT",
  links: [
    { name: 'Home', href: '/' },
    // { name: 'About', href: '/about' },
    { name: 'Performances', href: '/music' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Lessons', href: '/lessons' },
    // { name: 'Contact', href: '/booking' },
  ],
};

export const FOOTER = {
  brand: VARIABLES.artistName.toUpperCase(),
  brandDescription: `Blending Western Classical elegance with the rich musical heritage of ${VARIABLES.country}. Bringing the soul of the ${VARIABLES.instrument} to every stage.`,
  navTitle: "Navigation",
  navItems: ['Home', 'About', 'Music', 'Events', 'Lessons'],
  contactTitle: "Contact",
  bookEventsLink: "Book for Events →",
  newsletterTitle: "Newsletter",
  newsletterText: "Stay updated with upcoming concerts and new releases.",
  newsletterPlaceholder: "Your email address",
  newsletterSubscribe: "Subscribe",
  copyright: `© 2024 ${VARIABLES.artistName} Music. All Rights Reserved.`,
  privacyPolicy: "Privacy Policy",
  termsOfService: "Terms of Service",
};
