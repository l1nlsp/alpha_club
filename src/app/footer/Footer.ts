import { Infos } from '../Infos';

interface expansionPanel {
  title: string;
  sections:
    | { untertitel: string | false; beschreibung?: string[]; route?: string }[];
  // To prevent error in type assignation when importing from Infos [or using @ts-ignore]
  // | { untertitel: string | false; beschreibung: string }[];
}

export let expansionPanels: expansionPanel[] = [
  // @ts-ignore
  { title: 'Öffnungszeiten', sections: Infos[0].sections },
  {
    title: 'Werde Mitglied',
    sections: [
      {
        untertitel: false,
        beschreibung: [
          'Ab nur 29,-EUR monatlich!',
          'Kostenfreier Saunabesuch.',
          'Squash und Badminton 50% günstiger.',
          '30% günstigere Tennisplätze.',
          ' Jetzt kostenloses Probetraining mit unseren Trainern/Trainerinnen vereinbaren unter Tel. 08165/61010',
        ],
      },
    ],
  },
  {
    title: 'Adresse & Kontakt',
    sections: [
      {
        untertitel: false,
        beschreibung: [
          'Auweg 100',
          '85375 Neufahrn',
          ' Tel.: 08165 / 61010',
          ' Fax: 08165 / 670046',
          ' info(at)alphaclub-nf.de',
        ],
      },
    ],
  },
  {
    title: 'Rechtliches & Links',
    sections: [
      {
        untertitel: 'Informationen zum Datenschutz',
        route: '/index.php/informationen-zum-datenschutz',
      },
      { untertitel: 'AGB', route: '/index.php/agb' },
      { untertitel: 'Impressum', route: '/index.php/domains' },
      { untertitel: 'Partner', route: '/index.php/partner' },
    ],
  },
];
