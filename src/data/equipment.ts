/**
 * Workshop equipment, grouped by section for /equipment.
 *
 * `status` drives the pill on each card: 'owned' renders nothing (it is the
 * default and does not need saying), 'incoming' renders a copper badge for
 * machines still in acquisition, 'retired' a muted one for machines kept in
 * the record but no longer in service.
 *
 * Only Benjamin's own shop is listed — school and outsourced processes stay
 * off this page deliberately. Years appear only where known; a missing
 * `acquired` renders no date rather than a placeholder.
 */

export type Status = 'owned' | 'incoming' | 'retired';

export interface Machine {
  name:      string;
  type:      string;
  acquired?: string;
  status:    Status;
  specs?:    { key: string; val: string }[];
  notes?:    string;
  /** Cross-link to the project this machine exists to serve. */
  href?:     string;
  hrefLabel?: string;
  image?:    string;
  imageAlt:  string;
}

export interface EquipSection {
  num:      string;
  title:    string;
  intro?:   string;
  dark?:    boolean;
  /** Marks a section still being built out. */
  wip?:     boolean;
  machines: Machine[];
}

export const SECTIONS: EquipSection[] = [
  {
    num:   '01',
    title: 'Metalworking & CNC',
    intro:
      'The machines that exist so I can make precision augers at home rather than buy them. One is mid-conversion, and two more are still being acquired.',
    machines: [
      {
        name:     'Bridgeport Mill, 3-axis CNC',
        type:     'CNC Milling',
        acquired: '2026',
        status:   'owned',
        specs: [
          { key: 'Control', val: '3-axis CNC' },
          { key: 'In work', val: 'Hollow-bore rotary 4th axis' },
        ],
        notes:
          'Getting a hollow-bore rotary 4th axis on its existing control, so auger stock up to about 2 m can feed through the bore and be machined in roughly 30 cm sections.',
        href:      '/research/cnc-lathe-conversion',
        hrefLabel: 'The conversion project',
        image:     '/images/projects/shop-metalworking.webp',
        imageAlt:  'The metalworking bay — the mill under its cover, with the lathe on the steel bench behind it',
      },
      {
        name:     'South Bend C9-10JR Lathe',
        type:     'Manual Turning',
        acquired: '2026',
        status:   'owned',
        notes:
          'Manual lathe for turning, facing and threading — the machine I learned on before touching the conversion.',
        imageAlt: 'The South Bend C9-10JR lathe on its bench',
      },
      {
        name:     'Genmitsu 3030 ProVer',
        type:     'Desktop CNC Router',
        status:   'owned',
        specs: [
          { key: 'Materials', val: 'Brass, aluminum, acrylic, clad board' },
        ],
        notes:
          'Machines the brass lettering for the cards and mills copper circuit-board cards directly from clad stock.',
        href:      '/research/bd-cards',
        hrefLabel: 'What it makes',
        image:     '/images/projects/bdcards-pcb.webp',
        imageAlt:  'A milled copper circuit board with routed traces, cut on the desktop CNC router',
      },
      {
        name:     'Compression Auger Grinder',
        type:     'Purpose-Built Machine',
        acquired: 'Built 2024',
        status:   'owned',
        notes:
          "Built from my modified version of Jacob Franz and Joshua Pearce's open-source compression-screw grinder, scaled up to cut larger augers than the original design handles. It ground the auger inside the first filament machine.",
        href:      '/research/from-crude-to-extrude',
        hrefLabel: 'The machine it built',
        image:     '/images/projects/shop-auger-grinder.webp',
        imageAlt:  'The router-based compression-screw grinder, built on a wooden frame with an aluminum bed',
      },
      {
        name:    'Horizontal Bandsaw',
        type:    'Stock Preparation',
        status:  'owned',
        notes:   'Harbor Freight horizontal bandsaw — square cuts on bar and tube stock before anything reaches a machine.',
        imageAlt: 'Horizontal bandsaw cutting bar stock',
      },
      {
        name:     'South Bend Lathe, large',
        type:     'For CNC Conversion',
        status:   'incoming',
        notes:
          'The larger lathe that will take the CNC conversion: steppers on both axes, VFD spindle control, modified leadscrews and custom motor mounts.',
        href:      '/research/cnc-lathe-conversion',
        hrefLabel: 'Conversion plan',
        imageAlt:  'The large South Bend lathe earmarked for CNC conversion',
      },
      {
        name:    'Drill Press',
        type:    'Manual Machining',
        status:  'incoming',
        notes:   'Accurate hole placement and tapping, at a capacity the current benchtop unit cannot reach.',
        imageAlt: 'Floor-standing drill press',
      },
    ],
  },

  {
    num:   '02',
    title: 'Woodworking & Hand Tools',
    intro: 'The everyday set. Most of the frames, jigs and fixtures behind the other projects start here.',
    dark:  true,
    machines: [
      {
        name:     'Husky Workbench & Tool Chest',
        type:     'Bench & Storage',
        acquired: '2025',
        status:   'owned',
        notes:    'The main bench, and the drawers everything lives in. Organization is the difference between a shop you can work in and one you spend the evening searching.',
        image:    '/images/projects/shop-workbench.webp',
        imageAlt: 'The Husky workbench and tool chest against the shop wall, with whiteboard and pegboard above it',
      },
      {
        name:     'Husky Mechanics Tool Set',
        type:     'Hand Tools',
        acquired: '2025',
        status:   'owned',
        notes:    'Sockets, wrenches and drivers, laid out so a missing tool is obvious at a glance.',
        image:    '/images/projects/shop-tool-wall.webp',
        imageAlt: 'Hand tools, drivers and bits laid out in a shadow-board organizer',
      },
      {
        name:   'Chop Saw',
        type:   'Cutting',
        status: 'owned',
        notes:  'Timber for test frames, launcher A-frames and conveyor structure.',
        imageAlt: 'Chop saw on the workbench',
      },
      {
        name:   'Sanders & Grinders',
        type:   'Finishing',
        status: 'owned',
        notes:  'Stock removal and finishing on both wood and metal parts.',
        image:    '/images/workshop.jpg',
        imageAlt: 'Benjamin Davis cutting steel stock with an angle grinder, wearing a respirator and ear defenders',
      },
      {
        name:   'Dremel, Drills & Impacts',
        type:   'Rotary & Assembly',
        status: 'owned',
        notes:  'Detail cutting and deburring, and the cordless tools that actually assemble everything.',
        imageAlt: 'Dremel rotary tool, cordless drill and impact driver on the bench',
      },
      {
        name:   'Husky Air Compressor',
        type:   'Shop Air',
        status: 'owned',
        specs:  [{ key: 'Tank', val: '20 gallon' }],
        notes:  'Shop air, and the supply behind every pneumatic launcher test.',
        href:      '/research/j2-launcher',
        hrefLabel: 'What it feeds',
        imageAlt:  'The 20-gallon Husky air compressor in the shop',
      },
      {
        name:   'Material & Parts Storage',
        type:   'Shop Infrastructure',
        status: 'owned',
        specs: [
          { key: 'Filament', val: 'ABS, TPU, PA-6, ASA/PC, resin' },
          { key: 'Stock',    val: 'Sheet, bar, round, acrylic / G-10' },
        ],
        notes:  'Every material labelled by type, so a build does not stall while I work out what is actually in the drawer.',
        image:    '/images/projects/shop-material-storage.webp',
        imageAlt: 'Storage drawers labelled by material — ABS, TPU, PA-6, ASA/PC, resin, sheet stock, bar stock and round stock',
      },
    ],
  },

  {
    num:   '03',
    title: 'Additive Manufacturing',
    intro: 'FDM for structure and fixtures, resin for fine features. Between them they make most of the printed parts across every project on this site.',
    machines: [
      {
        name:     'Bambu Lab A1',
        type:     'FDM 3D Printer',
        acquired: '2024',
        status:   'owned',
        notes:    'The workhorse — jigs, fixtures, sabots, gear segments and most functional prototypes.',
        imageAlt: 'Bambu Lab A1 FDM printer',
      },
      {
        name:     'Bambu Lab X2D',
        type:     'FDM 3D Printer',
        acquired: '2026',
        status:   'owned',
        notes:    'Multi-color printing — the two-tone tactile tiles and the printed inserts in the nameplates.',
        href:      '/research/tactile-learning-tiles',
        hrefLabel: 'Two-color tiles',
        image:     '/images/projects/shop-print-station.webp',
        imageAlt:  'The print station — resin printer and wash-and-cure unit beside the enclosed FDM printer, lit by string lights',
      },
      {
        name:     'Creality Halot R6',
        type:     'Resin (MSLA) Printer',
        acquired: '2026',
        status:   'owned',
        notes:    'Fine-feature parts where FDM layer lines are too coarse.',
        imageAlt: 'Creality Halot R6 resin printer with its orange UV hood',
      },
      {
        name:     'Creality UW-03',
        type:     'Resin Wash & Cure',
        acquired: '2026',
        status:   'owned',
        notes:    'Wash and UV post-cure for everything off the resin printer.',
        imageAlt: 'Creality UW-03 wash and cure station',
      },
      {
        name:    'Prusa XL or Bambu Lab H3C',
        type:    'FDM 3D Printer',
        status:  'incoming',
        notes:   'Still deciding: a Prusa XL with a silicone toolhead, or a Bambu Lab H3C.',
        imageAlt: 'Next FDM printer — Prusa XL or Bambu Lab H3C',
      },
      {
        name:    'Creality Ender 3 Pro',
        type:    'FDM 3D Printer',
        status:  'retired',
        notes:   'Where I learned to print, and to fix printers — which turned out to be the more useful skill.',
        imageAlt: 'Creality Ender 3 Pro FDM printer',
      },
      {
        name:    'Creality Ender 3 S1',
        type:    'FDM 3D Printer',
        status:  'retired',
        notes:   'Second machine, and the one that made overnight production runs practical.',
        imageAlt: 'Creality Ender 3 S1 FDM printer',
      },
    ],
  },

  {
    num:   '04',
    title: 'Electronics',
    intro: 'Every control system across these projects — the filament machine, the launcher, the conveyor — was designed, wired and debugged at this bench.',
    dark:  true,
    machines: [
      {
        name:   'Soldering & Assembly Bench',
        type:   'Electronics Fabrication',
        status: 'owned',
        notes:  'Wire harnesses, thermocouple runs, sensor leads and board assembly.',
        image:    '/images/projects/shop-electronics-bench.webp',
        imageAlt: 'The electronics bench — soldering station, helping hands, heat gun and cutting mat',
      },
      {
        name:   'Prototyping & Control Hardware',
        type:   'Embedded Systems',
        status: 'owned',
        specs: [
          { key: 'Boards', val: 'Arduino, SparkFun RedBoard, Raspberry Pi' },
          { key: 'Power',  val: 'Mean Well supplies, SSRs, PID controllers' },
        ],
        notes:  'Breadboarding through to wired control cabinets — motor drive, PID temperature loops and sensor acquisition.',
        image:    '/images/projects/j2-electronics.webp',
        imageAlt: 'Control boards, breadboard and terminal blocks laid out before wiring',
      },
      {
        name:   'Component Storage',
        type:   'Shop Infrastructure',
        status: 'owned',
        notes:  'Bins of passives, connectors, fasteners and hardware — the difference between finishing a build tonight and ordering a part.',
        image:    '/images/projects/shop-parts-storage.webp',
        imageAlt: 'Wall of small-parts bins and component drawers beside the shop shelving',
      },
      {
        name:   'CAD & Control Workstation',
        type:   'Design & Machine Control',
        status: 'owned',
        specs: [
          { key: 'Machine', val: 'Dell Alienware Aurora 16X' },
          { key: 'CPU',     val: 'Intel Core Ultra 9 290HX' },
          { key: 'Memory',  val: '32 GB' },
          { key: 'GPU',     val: 'NVIDIA GeForce RTX 5060 Laptop, 8 GB' },
        ],
        notes:  'Where the CAD, CAM and firmware happen, and where the machines get driven from. Assembly-heavy Fusion models and CAM toolpath generation are what set the specification.',
        image:    '/images/projects/shop-cad-desk.webp',
        imageAlt: 'The CAD workstation — monitors and keyboard on a blue-topped desk tucked under the stairs',
      },
      {
        name:   '3Dconnexion CAD Peripherals',
        type:   'Input Hardware',
        status: 'owned',
        specs: [
          { key: 'Navigation', val: 'SpaceMouse Wireless' },
          { key: 'Pointing',   val: 'CadMouse Pro Wireless' },
          { key: 'Input',      val: 'Keyboard Pro, Numpad Pro' },
        ],
        notes:  'A six-degree-of-freedom puck in the left hand and a mouse in the right: you orbit and model at the same time instead of alternating. Over a long modelling session it is the difference between designing and operating software.',
        imageAlt: '3Dconnexion SpaceMouse, CadMouse Pro, keyboard and numpad at the CAD workstation',
      },
    ],
  },

  {
    num:   '05',
    title: 'Metrology & Test',
    wip:   true,
    intro:
      'The instruments decide whether a result is real. This is the part of the shop I am building out hardest right now, because Gen 2 needs tolerances the current set cannot verify.',
    machines: [
      {
        name:   'Particulate & VOC Meter',
        type:   'Air Quality',
        status: 'owned',
        specs: [
          { key: 'Measures', val: 'PM2.5, PM10, HCHO, TVOC' },
        ],
        notes:
          'The instrument behind the emissions result on the filament machine — about 5× lower particulates than standard extrusion, measured across the whole run rather than at steady state.',
        href:      '/research/from-crude-to-extrude',
        hrefLabel: 'The measurement',
        imageAlt:  'Handheld particulate and VOC meter displaying PM2.5, PM10, HCHO and TVOC readings',
      },
      {
        name:   'Digital Calipers',
        type:   'Dimensional',
        status: 'owned',
        notes:  'On every manufactured component, every iteration.',
        imageAlt: 'Digital calipers measuring a machined part',
      },
      {
        name:   'Dial Indicator',
        type:   'Dimensional',
        status: 'owned',
        notes:  'Runout and setup — indispensable once a lathe is involved.',
        imageAlt: 'Dial indicator mounted for a runout check',
      },
      {
        name:   'Digital Scale',
        type:   'Mass',
        status: 'owned',
        notes:  'Feedstock weighed per run so energy and yield figures stay comparable between materials.',
        imageAlt: 'Digital gram scale weighing shredded feedstock',
      },
      {
        name:   'Mitutoyo Calipers & Micrometers',
        type:   'Precision Dimensional',
        status: 'incoming',
        notes:  'The accuracy Gen 2 needs — verifying a machined auger against a drawing, not just checking that it looks right.',
        href:      '/research/gen-2-filament-research',
        hrefLabel: 'Why it matters',
        imageAlt:  'Precision micrometer and calipers',
      },
      {
        name:   'Measuring Microscope',
        type:   'Optical Inspection',
        status: 'incoming',
        notes:  'Surface and cross-section inspection — particularly the core–shell boundary in coaxial filament.',
        imageAlt: 'Measuring microscope for surface inspection',
      },
      {
        name:   'Go / No-Go Pin Gauges',
        type:   'Bore Verification',
        status: 'incoming',
        notes:  'Fast, unambiguous bore checks — the right tool for a hollow auger.',
        imageAlt: 'Set of go/no-go pin gauges',
      },
      {
        name:   'Probes',
        type:   'Machine Metrology',
        status: 'incoming',
        notes:  'On-machine probing, so parts get measured in the setup that cut them.',
        imageAlt: 'Touch probe mounted in a machine spindle',
      },
    ],
  },
];

export interface Software {
  name: string;
  role: string;
}

export const SOFTWARE: Software[] = [
  { name: 'Fusion 360',   role: 'Parametric CAD and CAM for every machined and printed part — working toward the Autodesk CAM certification, mill and turn' },
  { name: 'SolidWorks',   role: 'CAD — working toward the Certified SolidWorks Associate (CSWA)' },
  { name: 'OnShape',      role: 'Cloud CAD for quick iterations, and for handing a model to someone else' },
  { name: 'Fritzing',     role: 'Schematic capture and board layout for the milled PCBs' },
  { name: 'Bambu Studio', role: 'Slicing for every FDM job, including multi-color setup' },
  { name: 'Arduino IDE',  role: 'Firmware for the embedded control systems' },
  { name: 'Vernier Video Analysis', role: 'Frame-by-frame motion measurement — muzzle velocity, range and flight tracking' },
];

export interface SafetyItem {
  name: string;
  role: string;
}

/**
 * PPE and shop practice. Not machines, so this renders as its own list rather
 * than as cards — and it sits before the software section on the page.
 */
export const SAFETY: SafetyItem[] = [
  { name: 'Safety Glasses',  role: 'Worn for every cutting, grinding and machining operation, without exception' },
  { name: 'Ear Protection',  role: 'Grinders, the chop saw and the bandsaw all sit well past the level where hearing damage accumulates' },
  { name: 'Respirators',     role: 'Grinding, sanding and resin handling — the particulates I measure in the research are the same ones I breathe in the shop' },
  { name: 'Gloves',          role: 'Chemical and handling protection, selected per task — and never worn near a rotating spindle' },
  { name: 'Checklists',      role: 'Written start-up and shutdown checks, so a step gets skipped because it was done, not because it was forgotten' },
];
