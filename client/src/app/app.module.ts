import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainCoverComponent } from './main-cover/main-cover.component';
import { AboutComponent } from './about/about.component';
import { CountersComponent } from './counters/counters.component';
import { PricingComponent } from './pricing/pricing.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { BlogComponent } from './blog/blog.component';
import { FooterComponent } from './footer/footer.component';
import { LinkHomeComponent } from './link-home/link-home.component';
import { WINDOW_PROVIDERS } from './window.service';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { NgxGalleryModule } from 'ngx-gallery';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleriesService } from './gallery/services/galleries.service';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProcessesComponent } from './processes/processes.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainCoverComponent,
    AboutComponent,
    CountersComponent,
    PricingComponent,
    TestimonialComponent,
    BlogComponent,
    FooterComponent,
    LinkHomeComponent,
    GalleryComponent,
    ProcessesComponent,
  ],
  imports: [
    BrowserModule,
    NgxCarouselModule,
    NgxPageScrollModule,
    NgxGalleryModule,
    HttpModule,
    NgbModule.forRoot(),
    CommonModule
  ],
  providers: [
    WINDOW_PROVIDERS,
    GalleriesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
