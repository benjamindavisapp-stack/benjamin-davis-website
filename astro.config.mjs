import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://benjamindavis.build',

  /* Redirect disabled while the holding page is deployed — it was the only
     route besides / and 404, and it pointed at a page that is now hidden.
     Restore together with src/_pages_offline.
  redirects: {
    // The card project grew into BD Cards + CNC nameplates. Keep the old URL
    // alive — it has been printed on cards and linked externally.
    '/research/the-card': '/research/bd-cards',
  },
  */
});
