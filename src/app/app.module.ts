import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ContentfulService } from './services/contentful.service';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { WhatshappeningComponent } from './components/whatshappening/whatshappening.component';
import { BCaseStudyComponent } from './components/business/b-case-study/b-case-study.component';
import { BSolutionsComponent } from './components/business/b-solutions/b-solutions.component';
import { BTestimonialsComponent } from './components/business/b-testimonials/b-testimonials.component';
import { BProcessComponent } from './components/business/b-process/b-process.component';
import { WhyUsComponent } from './components/why-us/why-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { RNextStepsComponent } from './components/residential/r-next-steps/r-next-steps.component';
import { RWarrantyAndAfterCareComponent } from './components/residential/r-warranty-and-after-care/r-warranty-and-after-care.component';
import { RTestimonialsComponent } from './components/residential/r-testimonials/r-testimonials.component';
import { RProductsComponent } from './components/residential/r-products/r-products.component';
import { ATeamAndWorkWithUsComponent } from './components/about/a-team-and-work-with-us/a-team-and-work-with-us.component';
import { AMissionAndCoreValuesComponent } from './components/about/a-mission-and-core-values/a-mission-and-core-values.component';
import { AOurGroupComponent } from './components/about/a-our-group/a-our-group.component';
import { ASocialEntrepreneurComponent } from './components/about/a-social-entrepreneur/a-social-entrepreneur.component';
import { FooterComponent } from './components/footer/footer.component';

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
    ASocialEntrepreneurComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [ContentfulService],
  bootstrap: [AppComponent]
})
export class AppModule {
  contrauctor() {}
}
