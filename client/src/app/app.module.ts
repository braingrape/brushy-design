import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainCoverComponent } from './main-cover/main-cover.component';
import { AboutComponent } from './about/about.component';
import { VideoContentComponent } from './video-content/video-content.component';
import { CountersComponent } from './counters/counters.component';
import { PricingComponent } from './pricing/pricing.component';
import { ClientsComponent } from './clients/clients.component';
import { TeamComponent } from './team/team.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { BlogComponent } from './blog/blog.component';
import { ActionComponent } from './action/action.component';
import { FooterComponent } from './footer/footer.component';
import { LinkHomeComponent } from './link-home/link-home.component';
import { SvgBottomComponent } from './svg-bottom/svg-bottom.component';
import { SvgTopComponent } from './svg-top/svg.top.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainCoverComponent,
    AboutComponent,
    VideoContentComponent,
    CountersComponent,
    PricingComponent,
    ClientsComponent,
    TeamComponent,
    TestimonialComponent,
    BlogComponent,
    ActionComponent,
    FooterComponent,
    LinkHomeComponent,
    SvgBottomComponent,
    SvgTopComponent
  ],
  imports: [
    BrowserModule,
    NgxCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
