import { Component, OnInit } from '@angular/core';
import { Hyperlinks } from '../Hyperlinks';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.sass'],
})
export class LandingComponent implements OnInit {
  Menu_Options = Hyperlinks[1].dropdown?.hyperlinks;
  Hyperlinks = Hyperlinks;

  message =
    'Liebes Mitglied, ab dem 03.04.2022 entfallen alle Coronaeinschränkungen für Dein Fitnesstraining. Keine 3 G Regelung – dennoch sind Masken, der Mindestabstand zueinander und das Einhalten der allgemeinen Hygienevorschriften weiterhin sehr gerne gesehen. Viel Spaß beim Training! Euer Alpha Club Team';
  constructor() {}

  ngOnInit(): void {}
}
