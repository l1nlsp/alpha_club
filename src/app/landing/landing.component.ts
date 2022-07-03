import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxGlideComponent } from 'ngx-glide';
import { Hyperlinks } from '../Hyperlinks';
import { Infos } from '../Infos';
import { Sliders } from './Slider';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.sass'],
})
export class LandingComponent implements OnInit {
  @ViewChild(NgxGlideComponent, { static: false })
  ngxGlide!: NgxGlideComponent;

  Menu_Options = Hyperlinks[1].dropdown?.hyperlinks;
  Hyperlinks = Hyperlinks;
  Infos = Infos;
  Sliders = Sliders;
  slide_index: number = 0;

  swiped() {
    this.slide_index = this.ngxGlide.getIndex();
    console.log(this.slide_index);
  }

  constructor() {}

  ngOnInit(): void {}
}
