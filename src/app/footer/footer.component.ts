import { Component, OnInit, ViewChild } from '@angular/core';
import { expansionPanels } from './Footer';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass'],
})
export class FooterComponent implements OnInit {
  expansionPanels = expansionPanels;
  today: number = Date.now();
  // TO start accordion opened
  @ViewChild(MatAccordion)
  accordion: MatAccordion = new MatAccordion();

  constructor() {}
  ngOnInit(): void {}
}
