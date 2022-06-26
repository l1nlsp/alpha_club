import { Component, OnInit } from '@angular/core';
import { Hyperlinks } from '../Hyperlinks';
import { Infos } from './Infos';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.sass'],
})
export class LandingComponent implements OnInit {
  Menu_Options = Hyperlinks[1].dropdown?.hyperlinks;
  Hyperlinks = Hyperlinks;
  Infos = Infos;

  constructor() {}

  ngOnInit(): void {}
}
