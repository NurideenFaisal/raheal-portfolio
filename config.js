/* =====================================================================
   SITE CONFIGURATION  —  tweak the whole site from here
   =====================================================================

   This is the one file to open when you want to change how the site
   looks or what it shows. Save the file and refresh the browser.

   Sections:
     1. CARDS      — blur & overlay on project highlight cards
     2. BACKGROUND — optional blended page background image
     3. COLORS     — override any brand colour
     4. TOOLS      — the Platform Expertise grid

   ===================================================================== */

var SITE = {

  /* -------------------------------------------------------------------
     1. PROJECT / WORK CARDS
     -------------------------------------------------------------------
     blur         blur amount on the card background photo
                  0  = sharp image    2 = soft    4 = heavy blur
     overlayColor dark colour behind the text — as R,G,B values
                  '10,22,18'  = dark forest green  (default, on-brand)
                  '0,0,0'     = pure black
                  '30,20,10'  = dark warm brown
     overlayTop   opacity at the top of the card    (0 = clear → 1 = solid)
     overlayMid   opacity at mid-card
     overlayBot   opacity at the bottom (where text lives)
  ------------------------------------------------------------------- */
  cards: {
    blur:         3,
    overlayColor: '10,22,18',
    overlayTop:   0.48,
    overlayMid:   0.70,
    overlayBot:   0.97
  },

  /* -------------------------------------------------------------------
     2. PAGE BACKGROUND IMAGE
     -------------------------------------------------------------------
     Set image to a file path to add a blended background image to the
     whole page. Keep it null to use the plain ivory background.

     image    path to the image file, e.g. 'assets/bg.jpg'
              Add your image to the assets/ folder first, then set the path.
     opacity  0 – 1  (0.05 = barely visible  ·  0.15 = noticeable)
     blend    CSS mix-blend-mode
              'multiply' — works best on the ivory background (darkens)
              'overlay'  — adds contrast and richness
              'soft-light' — very subtle lift
  ------------------------------------------------------------------- */
  bg: {
    image:   null,           /* e.g.  'assets/bg.jpg'  */
    opacity: 0.08,
    blend:   'multiply'
  },

  /* -------------------------------------------------------------------
     3. COLOUR OVERRIDES
     -------------------------------------------------------------------
     Uncomment any line and change the value to override the default.
     These map directly to the CSS custom properties in styles.css.
  ------------------------------------------------------------------- */
  colors: {
    // paper:      '#F5EFE4',   /* warm ivory  — page background           */
    // pine:       '#1E4A3F',   /* deep forest green — primary accent       */
    // clay:       '#BE6B45',   /* terracotta  — highlights & eyebrows      */
    // ink:        '#211D17',   /* warm near-black — body text              */
    // 'ink-mute': '#6B6253',   /* muted brown — supporting text            */
  },

  /* -------------------------------------------------------------------
     4. TOOLS LIST  (Platform Expertise section)
     -------------------------------------------------------------------
     To ADD a tool    copy any line, paste it, change the values.
     To REMOVE a tool delete the whole line (and the comma before it).
     To RENAME        change the n: value.

     n    display name shown on the card
     file SVG logo filename inside assets/logos/ — no .svg extension
          Set to null if there is no logo file (initials will show instead)
     c    background colour used for the initials fallback
  ------------------------------------------------------------------- */
  tools: [
    { n: 'Notion',           file: 'notion',          c: '#211D17' },
    { n: 'Trello',           file: 'trello',          c: '#1868DB' },
    { n: 'Calendly',         file: 'calendly',        c: '#006BFF' },
    { n: 'Zoom',             file: 'zoom',            c: '#0B5CFF' },
    { n: 'Google Workspace', file: 'googleworkspace', c: '#1A73E8' },
    { n: 'Metricool',        file: null,              c: '#1E4A3F' },
    { n: 'AWeber',           file: null,              c: '#211D17' },
    { n: 'Mailchimp',        file: 'mailchimp',       c: '#211D17' },
    { n: 'MS Office',        file: null,              c: '#D83B01' },
    { n: 'Buffer',           file: 'buffer',          c: '#231F20' },
    { n: 'Meta Business',    file: 'meta',            c: '#0467DF' },
    { n: 'Canva',            file: 'canva',           c: '#0A9DA4' },
    { n: 'HubSpot',          file: 'hubspot',         c: '#FF5C35' },
    { n: 'Zapier',           file: 'zapier',          c: '#FF4F00' },
    { n: 'Airtable',         file: 'airtable',        c: '#2D6FE0' },
    { n: 'Slack',            file: 'slack',           c: '#4A154B' },
    { n: 'Asana',            file: 'asana',           c: '#E8517B' },
    { n: 'Grammarly',        file: 'grammarly',       c: '#027E6F' },
    { n: 'ChatGPT',          file: 'chatgpt',         c: '#211D17' },
    { n: 'Gemini',           file: 'gemini',          c: '#4C6EF5' },
    { n: 'Google Meet',      file: 'googlemeet',      c: '#00897B' },
    { n: 'Outlook',          file: null,              c: '#0078D4' }
  ]

};
