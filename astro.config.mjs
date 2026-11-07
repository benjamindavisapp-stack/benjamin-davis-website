import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://benjamindavis.build',

  redirects: {
    // The card project grew into BD Cards + CNC nameplates. Keep the old URL
    // alive — it has been printed on cards and linked externally.
    '/research/the-card': '/research/bd-cards',
  },
});
