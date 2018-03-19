import { Component, Inject ,  ViewChild, ElementRef , HostListener  } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { WINDOW } from '../window.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isScrolledToTop: any = true;

  constructor( @Inject(DOCUMENT) private document: Document, @Inject(WINDOW) private window) {
  }

  @ViewChild('header') divv: ElementRef;
  @HostListener('window: scroll', [])
  onWindowScroll() {
    const number = this.window.pageYOffset
      || this.document.documentElement.scrollTop
      || this.document.body.scrollTop
      || 0;

    this.isScrolledToTop = !(number > 100);

    // if (number > 100) {
    //   this.activeClass = true;
    // } else {
    //   this.activeClass = false;
    // }
  }
}
