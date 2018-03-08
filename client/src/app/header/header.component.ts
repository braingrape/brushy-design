import { Component, OnInit, Inject ,  ViewChild, ViewChildren, ElementRef, QueryList , HostListener  } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { WINDOW } from '../window.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  activeClass: any = false;
  constructor( @Inject(DOCUMENT) private document: Document,
  @Inject(WINDOW) private window) {  }
  @ViewChild('headerr') divv: ElementRef;
  @HostListener('window: scroll', [])
  onWindowScroll() {
    const number = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
    if (number > 100) {
      this.activeClass = true;
    } else {
      this.activeClass = false;
    }
  }
  ngOnInit() {
  }

}
