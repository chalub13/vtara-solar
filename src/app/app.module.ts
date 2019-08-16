import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ContentfulService } from './contentful.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { WhatshappeningComponent } from './whatshappening/whatshappening.component';
import { BCaseStudyComponent } from './business/b-case-study/b-case-study.component';
import { BSolutionsComponent } from './business/b-solutions/b-solutions.component';
import { BTestimonialsComponent } from './business/b-testimonials/b-testimonials.component';
import { BProcessComponent } from './business/b-process/b-process.component';
import { WhyUsComponent } from './why-us/why-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RNextStepsComponent } from './residential/r-next-steps/r-next-steps.component';
import { RWarrantyAndAfterCareComponent } from './residential/r-warranty-and-after-care/r-warranty-and-after-care.component';
import { RTestimonialsComponent } from './residential/r-testimonials/r-testimonials.component';
import { RProductsComponent } from './residential/r-products/r-products.component';
import { ATeamAndWorkWithUsComponent } from './about/a-team-and-work-with-us/a-team-and-work-with-us.component';
import { AMissionAndCoreValuesComponent } from './about/a-mission-and-core-values/a-mission-and-core-values.component';
import { AOurGroupComponent } from './about/a-our-group/a-our-group.component';
import { ASocialEntrepreneurComponent } from './about/a-social-entrepreneur/a-social-entrepreneur.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    WhatshappeningComponent,
    BCaseStudyComponent,
    BSolutionsComponent,
    BTestimonialsComponent,
    BProcessComponent,
    WhyUsComponent,
    ContactUsComponent,
    RNextStepsComponent,
    RWarrantyAndAfterCareComponent,
    RTestimonialsComponent,
    RProductsComponent,
    ATeamAndWorkWithUsComponent,
    AMissionAndCoreValuesComponent,
    AOurGroupComponent,
    ASocialEntrepreneurComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [ContentfulService],
  bootstrap: [AppComponent]
})
export class AppModule {
  contrauctor() {}
}
