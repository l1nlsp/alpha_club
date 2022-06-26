interface Info {
  icon: string; //Material Icons Name
  titel: string;
  sections: { untertitel: string | false; beschreibung: string }[] | false;
}

export let Infos: Info[] = [
  {
    icon: 'schedule',
    titel: 'Öffnungszeiten',
    sections: [
      {
        untertitel: 'Montag bis Donnerstag:',
        beschreibung: '06.00 bis 22.00 Uhr',
      },
      { untertitel: 'Freitag:', beschreibung: '06.00 bis 20.00 Uhr' },
      {
        untertitel: 'Samstag, Sonntag, Feiertage:',
        beschreibung: '09:00 bis 18:00 Uhr',
      },
    ],
  },
  {
    icon: 'hot_tub',
    titel: 'Sauna Öffnungszeiten',
    sections: [
      {
        untertitel: 'Montag bis Donnerstag:',
        beschreibung: '09.00 bis 21.00 Uhr',
      },
      { untertitel: 'Freitag:', beschreibung: '09.00 bis 19.00 Uhr' },
      {
        untertitel: 'Samstag, Sonntag, Feiertage:',
        beschreibung: '09:00 bis 17:00 Uhr',
      },
    ],
  },
  {
    icon: 'call',
    titel: 'Kontakt',
    sections: [
      {
        untertitel: 'Rufen Sie uns an unter:',
        beschreibung: 'Tel.: 0 81 65 / 610 10',
      },
      {
        untertitel: 'Senden Sie eine E-Mail:',
        beschreibung: 'info@alphaclub-nf.de',
      },
    ],
  },
  {
    icon: 'pin_drop',
    titel: 'Anfahrt',
    sections: [
      { untertitel: false, beschreibung: 'Alpha Club Sportanlagen GmbH' },
      { untertitel: false, beschreibung: 'Auweg 100' },
      { untertitel: false, beschreibung: '85375 Neufahrn' },
    ],
  },
  {
    icon: 'directions_car',
    titel: 'Parken',
    sections: [
      {
        untertitel: false,
        beschreibung: 'Kostenfreie Parkplätze stehen zur Verfügung.',
      },
    ],
  },
  {
    icon: 'wifi',
    titel: 'WLAN',
    sections: false,
  },
  {
    icon: 'local_cafe',
    titel: 'Getränkebar',
    sections: false,
  },
  {
    icon: 'graphic_eq',
    titel: 'Musik',
    sections: false,
  },
  {
    icon: 'spa',
    titel: 'Wellness',
    sections: false,
  },
];
