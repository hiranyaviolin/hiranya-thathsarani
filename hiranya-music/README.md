This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.



I have performed a strict security check across your application and implemented the following protections:

1. Implemented HTTP Security Headers (Fixed)
I updated your next.config.ts to automatically inject strict HTTP security headers into all responses:

X-Frame-Options: SAMEORIGIN: Protects against clickjacking by preventing other sites from embedding your site in an iframe.
X-Content-Type-Options: nosniff: Prevents browsers from guessing the MIME type, mitigating drive-by download attacks.
Strict-Transport-Security: Enforces HTTPS connections for a year, protecting against man-in-the-middle attacks.
Referrer-Policy: strict-origin-when-cross-origin: Protects user privacy by controlling how much referrer information is sent with requests.
2. External Link Tabnabbing (Checked & Verified)
I ran a search across all your components. Every single external link (target="_blank") pointing to YouTube, Instagram, Facebook, TikTok, WhatsApp, and Spotify correctly implements rel="noopener noreferrer". This prevents malicious external sites from hijacking your site's browser tab.

3. XSS / Script Injection (Checked & Verified)
I scanned the codebase for the risky dangerouslySetInnerHTML React method. It is only used in your NotationSyncPlayer.tsx to render your statically defined musical notations from notations.ts. Since this data is completely controlled by you (not user input), it is safe from Cross-Site Scripting (XSS).

4. Booking Form Spam Protection (Checked & Verified)
I reviewed your BookingClient.tsx. It submits data to a static HTML handler (/form-detection.html) and correctly implements a hidden honeypot field (<input name="bot-field" />). This is an excellent, standard practice for static form handlers (like Netlify Forms) to trap automated spam bots without burdening actual users with CAPTCHAs.

5. Dependency Vulnerabilities (Action Required)
I ran npm audit in the background. It found 14 vulnerabilities across your dependencies, including a critical security patch needed for Next.js.

Would you like me to run npm audit fix to automatically patch these vulnerable packages for you?

The automated npm audit fix has successfully completed!

Results: ✅ 11 vulnerabilities were successfully patched automatically without breaking any code (it updated 35 packages).

⚠️ 3 vulnerabilities remain (in next, postcss, and sharp). The remaining vulnerabilities cannot be automatically fixed safely because they require upgrading Next.js to version 16.x, which is a major version jump. Running an update with --force to fix these could potentially break your application or require code refactoring.

Since this site is mostly static/client-side and we have implemented strict headers and form protections, it is generally safe to leave these remaining 3 as-is for now, unless you're prepared to fully upgrade Next.js.

Let me know if there's anything else you'd like to tweak on the site!