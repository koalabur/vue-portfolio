## What's Going On?
- SSR: Server Side Rendering for SEO
- Firebase - Cloud Firestore: Non SQL Database Hosting large majority of the content seen on site
- Cloudinary: Hosting all of the jpegs and pngs, dynamic resizing, auto optimization
- Base64 Encoded SVGs: Used to import svgs as img tags for better cross browser compatibility
- API Ninja: API for random facts
- \<Transition\>: Animations for mounting and unmounting components
- GSAP: Scroll triggered animations
- Pinia: Create and share global state between components
- Intersction Observer API: Highlight nav links when section is in view \
-- Usage: sending section ref to global state when it's in viewport then highlighting nav link of said section

## Resources for Cloud Firestore Configuration:

Query: https://www.youtube.com/watch?v=eylH4KxDJJw \
Additional Info for SSR and Firebase: https://fireship.io/lessons/nuxt-3-firebase/ \
ENV Vars: https://github.com/gladly-team/next-firebase-auth/discussions/95

# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
