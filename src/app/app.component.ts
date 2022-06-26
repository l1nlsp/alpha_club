import { Component } from '@angular/core';
import { Hyperlinks } from './Hyperlinks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'alpha_club';
  Hyperlinks = Hyperlinks;

  //window.onScroll listener for animations
  scrolled: boolean = false;
  navOnScroll(): void {
    if (window.scrollY > 20) {
      this.scrolled = true;
    } else this.scrolled = false;
    return;
  }
}
