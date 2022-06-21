import { Component, OnInit } from '@angular/core';

//custom interfaces
import { Hyperlink } from './Hyperlink';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.sass'],
})
export class NavigationBarComponent implements OnInit {
  isMenuCollapsed: boolean = true;

  hyperlinks: Hyperlink[] = [
    { name: 'Home', route: '/' },
    {
      name: 'online buchen',
      dropdown: {
        value: true,
        hyperlinks: [
          {
            name: 'Ballsport',
            route: 'https://www.eversports.de/widget/w/qif2oo',
          },
          {
            name: 'Kurse',
            route:
              'https://www.mysports.com/studio/YWxwaGFjbHVibmV1ZmFocm46MTIxMDAxMDA3MA%3D%3D/course',
          },
          {
            name: 'Probetraining',
            route:
              'https://www.mysports.com/studio/YWxwaGFjbHVibmV1ZmFocm46MTIxMDAxMDA3MA%3D%3D/trial-session/2',
          },
          {
            name: 'Mitgliedschaft',
            route:
              'https://www.mysports.com/studio/YWxwaGFjbHVibmV1ZmFocm46MTIxMDAxMDA3MA%3D%3D/contract',
          },
        ],
      },
    },
    { name: 'studio', route: '/fitness' },
    { name: 'Kurse', route: '/kursangebot' },
    { name: 'Racket', route: '/racket' },
    { name: 'Mitgliedschaft & Preise', route: '/mitgliedschaft-preise' },
    { name: 'Jobs', route: '/jobs' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
