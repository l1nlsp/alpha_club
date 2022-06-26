import { Component, OnInit } from '@angular/core';
import { expansionPanels } from './Footer';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass'],
})
export class FooterComponent implements OnInit {
  expansionPanels = expansionPanels;
  constructor() {}

  ngOnInit(): void {}
}
