import { VARIABLES } from "./variables";

export const METADATA = {
  title: {
    default: `${VARIABLES.artistName} | Professional ${VARIABLES.countryAdjective} ${VARIABLES.instrumentTitle}`,
    template: `%s | ${VARIABLES.artistName}`,
  },
  description: `Experience the soul of the ${VARIABLES.instrument} with ${VARIABLES.artistName}, blending Western classical mastery with the vibrant musical heritage of ${VARIABLES.country}.`,
  keywords: VARIABLES.baseKeywords,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: VARIABLES.domain,
    title: `${VARIABLES.artistName} | Professional ${VARIABLES.countryAdjective} ${VARIABLES.instrumentTitle}`,
    description: `Experience the soul of the ${VARIABLES.instrument} with ${VARIABLES.artistName}, blending Western classical mastery with the vibrant musical heritage of ${VARIABLES.country}.`,
    siteName: `${VARIABLES.artistName} Music`,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${VARIABLES.artistName} Performance`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${VARIABLES.artistName} | Professional ${VARIABLES.countryAdjective} ${VARIABLES.instrumentTitle}`,
    description: `Experience the soul of the ${VARIABLES.instrument} with ${VARIABLES.artistName}, blending Western classical mastery with the vibrant musical heritage of ${VARIABLES.country}.`,
    images: ["/og-image.jpg"],
  },
};
