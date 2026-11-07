/**
 * Single source of truth for the ten projects shown on /research.
 *
 * The index page builds its four sections from `SECTIONS` + `PROJECTS`; each
 * detail page imports `getProject(slug)` for its own title/meta and uses
 * `getNeighbours(slug)` to wire the prev/next footer. Adding a project means
 * adding one entry here and one page under src/pages/research/.
 *
 * `coverFocus` is the CSS object-position for the cover crop — portrait source
 * photos need it so the subject survives the 3:2 card crop.
 */

export type SectionId = 'research' | 'shop' | 'builds' | 'community';

export interface Section {
  id:       SectionId;
  num:      string;
  title:    string;
  intro?:   string;
  /** Flagship entries render as full-width cards rather than grid tiles. */
  featured?: boolean;
  dark?:    boolean;
}

export interface Collaborator {
  name: string;
  url?: string;
}

export interface Project {
  slug:        string;
  section:     SectionId;
  title:       string;
  /** Shorter label for prev/next nav and cards where the full title is long. */
  shortTitle?: string;
  year:        string;
  role:        string;
  status:      'Complete' | 'In progress' | 'Ongoing';
  /** Card summary — two or three sentences, Benjamin's own wording. */
  summary:     string;
  tags:        string[];
  cover:       string;
  coverAlt:    string;
  coverFocus?: string;
  /** Single line of emphasis on the card (awards, funding, headline result). */
  highlight?:  string;
}

export const SECTIONS: Section[] = [
  {
    id:       'research',
    num:      '01',
    title:    'Flagship Research',
    intro:    'Independent, multi-year research on recycling plastic waste into 3D-printing filament — the first machine, and the one replacing it.',
    featured: true,
  },
  {
    id:    'shop',
    num:   '02',
    title: 'Shop & Machine Projects',
    intro: 'Building the tools that make the research possible.',
    dark:  true,
  },
  {
    id:    'builds',
    num:   '03',
    title: 'Builds',
    intro: 'Projects done for class, for curiosity, or because the opportunity was there.',
  },
  {
    id:    'community',
    num:   '04',
    title: 'Team & Community',
    intro: 'Work led with a team, for people other than me.',
    dark:  true,
  },
];

export const PROJECTS: Project[] = [
  // ── 01 · Flagship research ──────────────────────────────────────────────
  {
    slug:    'from-crude-to-extrude',
    section: 'research',
    title:   'From Crude to Extrude',
    year:    '2023–2025',
    role:    'Solo researcher',
    status:  'Complete',
    summary:
      'A desktop machine that combines pultrusion and extrusion in one filament line, turning PET bottle waste and 3D-printing purge into usable printer filament. I designed the mechanical and electrical systems, made every part, and built and tested it over 800+ hours and 50+ component iterations.',
    tags:     ['Additive Manufacturing', 'Recycling', 'Extrusion', 'ISEF 2025'],
    cover:    '/images/machine-full.jpg',
    coverAlt: 'The From Crude to Extrude recycling and filament machine set up on its display table',
    highlight: 'Regeneron Young Scientist Award · ISEF 2025 · 1 of 2 worldwide · $75,000',
  },
  {
    slug:       'gen-2-filament-research',
    section:    'research',
    title:      'Gen 2: Extrusion–Pultrusion and Coaxial Filament',
    shortTitle: 'Gen 2 Filament Research',
    year:       'July 2026 – June 2027',
    role:       'Solo researcher',
    status:     'In progress',
    summary:
      'The next machine fixes the three limits of the first: a DIY-ground auger with about ±0.2 mm tolerance, a 240 °C ceiling set by printed internal parts, and no way to make composite or core–shell filament. It adds CNC-machined augers, higher throughput, and coaxial filament — a PLA-CF core wrapped in a PLA sheath.',
    tags:      ['Research', 'Composites', 'Coaxial Filament', 'Machine Design'],
    cover:     '/images/projects/gen2-auger.jpg',
    coverAlt:  'The first-generation DIY-ground compression auger on the workbench, the part Gen 2 replaces with a CNC-machined screw',
    highlight: 'Supported by the Masason Foundation',
  },

  // ── 02 · Shop & machine projects ────────────────────────────────────────
  {
    slug:       'cnc-lathe-conversion',
    section:    'shop',
    title:      'CNC Lathe Conversion and Hollow-Bore 4th Axis',
    shortTitle: 'CNC Lathe & 4th Axis',
    year:       '2026–',
    role:       'Solo',
    status:     'In progress',
    summary:
      'I\'m converting a South Bend manual lathe to CNC and adding a hollow-bore rotary 4th axis to a CNC Bridgeport mill, so I can machine my own precision augers at home. The through-bore is the key idea: an auger up to 2 m long feeds through the rotary axis and is machined in about 30 cm sections, so a small machine can make parts far longer than its own travel.',
    tags:     ['CNC', 'Machine Conversion', 'Machine Safety', 'Fabrication'],
    cover:    '/images/workshop.jpg',
    coverAlt: 'Benjamin Davis cutting steel stock with an angle grinder in his home shop, wearing a respirator and ear defenders',
  },

  // ── 03 · Builds ─────────────────────────────────────────────────────────
  {
    slug:       'j2-launcher',
    section:    'builds',
    title:      'J2: Camera-Aimed Pneumatic Launcher',
    shortTitle: 'J2 Launcher',
    year:       '2026',
    role:       'Lead designer and builder',
    status:     'Complete',
    summary:
      'A compressed-air launcher for T-shirts and tennis balls that aims itself. It started as Javelin 2, a three-person AP Physics 1 project where I was lead designer, planner and builder. I then rebuilt it with camera aiming: click a target, and it solves for launch angle and pressure and drives the barrel there.',
    tags:       ['Pneumatics', 'Controls', 'Computer Vision', '3D Printing'],
    cover:      '/images/projects/j2-complete.jpg',
    coverAlt:   'The completed J2 launcher standing on its rotating base outdoors, barrel raised against autumn woods',
    coverFocus: 'center 45%',
  },
  {
    slug:       'bottle-rocket-study',
    section:    'builds',
    title:      'Rail-Mounted Water Bottle Rocket Study',
    shortTitle: 'Bottle Rocket Study',
    year:       '2023–2024',
    role:       'Solo researcher',
    status:     'Complete',
    summary:
      'My first research project: how much water gives a bottle rocket the best flight. I ran 100+ launches at 50 mL steps from 0 to 1,000 mL and tracked apogee for each.',
    tags:      ['Rocketry', 'Experimental Design', 'Data Analysis'],
    cover:     '/images/engineering-rocket.jpg',
    coverAlt:  'Benjamin Davis setting the pressure gauge on the rail-mounted bottle rocket launcher before a test flight',
    highlight: '1st Place · Massachusetts Region III Science Fair',
  },
  {
    slug:       'water-rocket',
    section:    'builds',
    title:      '10-ft Physics Water Rocket',
    shortTitle: '10-ft Water Rocket',
    year:       '2026',
    role:       'Team of five',
    status:     'Complete',
    summary:
      'A 10-ft water rocket with a 2-liter bottle pressure chamber, printed nose cone, clear tube body sections and three fin sets. It launched cleanly, then pitched over and landed nose-first.',
    tags:       ['Rocketry', 'Aerodynamics', '3D Printing', 'Physics'],
    cover:      '/images/projects/rocket10-launch.jpg',
    coverAlt:   'The 10-ft water rocket standing on its launch pad on the school field with the class watching from a distance',
    coverFocus: 'center 40%',
  },
  {
    slug:       'bd-cards',
    section:    'builds',
    title:      'BD Cards and CNC Nameplates',
    shortTitle: 'BD Cards & Nameplates',
    year:       '2026',
    role:       'Designer, maker, owner',
    status:     'Ongoing',
    summary:
      'Custom business cards that need CAD, CAM and six manufacturing processes each: an SLS-printed frame, CNC-machined brass lettering, laser-cut acrylic, anodizing, multi-color and resin printing, and an embedded NFC tag that opens this site.',
    tags:     ['CNC', 'SLS', 'Anodizing', 'NFC', 'Product Design'],
    cover:    '/images/projects/bdcards-card.jpg',
    coverAlt: 'A finished BD card held in hand — machined frame, lattice infill, and raised BENJAMIN DAVIS / ADVANCED MANUFACTURING lettering',
  },

  // ── 04 · Team & community ───────────────────────────────────────────────
  {
    slug:       'tactile-learning-tiles',
    section:    'community',
    title:      'Tactile Learning Tiles',
    shortTitle: 'Tactile Learning Tiles',
    year:       '2025–2026',
    role:       'TechForge team lead',
    status:     'Complete',
    summary:
      'Learning tiles for children with disabilities, donated to Pappas Rehabilitation Hospital. Each tile has a raised icon, large print and braille, so sighted and blind students can use the same card.',
    tags:     ['Accessibility', '3D Printing', 'Fusion 360', 'TechForge'],
    cover:    '/images/projects/tactile-tiles.jpg',
    coverAlt: 'Eight finished tactile learning tiles laid out on a dark bench — raised orange icons, large print and braille on white tiles',
  },
  {
    slug:       'santa-shop-conveyor',
    section:    'community',
    title:      'Santa Shop Conveyor',
    shortTitle: 'Santa Shop Conveyor',
    year:       '2025',
    role:       'TechForge team lead',
    status:     'Complete',
    summary:
      'A holiday conveyor that carries 3D-printed toys under a decorated hopper for my school\'s annual Santa Shop. I led the TechForge team and set up an assembly line to make the rollers.',
    tags:     ['Mechanisms', 'Team Lead', 'Fabrication', 'TechForge'],
    cover:    '/images/projects/santa-conveyor.jpg',
    coverAlt: 'The finished Santa Shop conveyor installed in the school hall, clad in wrapping paper and decorated for the event',
  },
  {
    slug:       'harvard-street',
    section:    'community',
    title:      'Harvard Street Project',
    shortTitle: 'Harvard Street Project',
    year:       'Fall 2026',
    role:       'Partner project · Engineering II',
    status:     'In progress',
    summary:
      'With my Engineering II partner, I\'m working on traffic and logistics problems at the Harvard Street entrance to my school. The concept is a solar-powered gate opener with a remote, plus a barrier arm or lit "Do Not Exit" sign to replace cones.',
    tags:     ['Systems Design', 'Solar', 'Civil', 'Engineering II'],
    cover:    '',
    coverAlt: 'Harvard Street entrance concept — photo to come once the build is under way',
  },
];

/** Projects in the order they appear on the index, used for prev/next. */
export const ORDERED: Project[] = SECTIONS.flatMap(s =>
  PROJECTS.filter(p => p.section === s.id),
);

export function projectsIn(section: SectionId): Project[] {
  return PROJECTS.filter(p => p.section === section);
}

export function getProject(slug: string): Project {
  const found = PROJECTS.find(p => p.slug === slug);
  if (!found) throw new Error(`Unknown project slug: ${slug}`);
  return found;
}

/** Prev/next neighbours in index order, for the ProjectLayout footer nav. */
export function getNeighbours(slug: string) {
  const i = ORDERED.findIndex(p => p.slug === slug);
  const nav = (p?: Project) =>
    p ? { title: p.shortTitle ?? p.title, href: `/research/${p.slug}` } : undefined;
  return { prevProject: nav(ORDERED[i - 1]), nextProject: nav(ORDERED[i + 1]) };
}
