import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WhatshappeningComponent } from './whatshappening/whatshappening.component';
import { BCaseStudyComponent } from './business/b-case-study/b-case-study.component';
import { BSolutionsComponent } from './business/b-solutions/b-solutions.component';
import { BTestimonialsComponent } from './business/b-testimonials/b-testimonials.component';
import { BProcessComponent } from './business/b-process/b-process.component';
import { BWhyUsComponent } from './business/b-why-us/b-why-us.component';
import { BContactUsComponent } from './business/b-contact-us/b-contact-us.component';
import { RWhyUsComponent } from './residential/r-why-us/r-why-us.component';
import { RNextStepsComponent } from './residential/r-next-steps/r-next-steps.component';
import { RWarrantyAndAfterCareComponent } from './residential/r-warranty-and-after-care/r-warranty-and-after-care.component';
import { RTestimonialsComponent } from './residential/r-testimonials/r-testimonials.component';
import { RProductsComponent } from './residential/r-products/r-products.component';
import { RContactUsComponent } from './residential/r-contact-us/r-contact-us.component';
import { ATeamAndWorkWithUsComponent } from './about/a-team-and-work-with-us/a-team-and-work-with-us.component';
import { AMissionAndCoreValuesComponent } from './about/a-mission-and-core-values/a-mission-and-core-values.component';
import { AOurGroupComponent } from './about/a-our-group/a-our-group.component';
import { AContactUsComponent } from './about/a-contact-us/a-contact-us.component';
import { ASocialEntrepreneurComponent } from './about/a-social-entrepreneur/a-social-entrepreneur.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'whatshappening', component: WhatshappeningComponent },
  { path: 'b-case-study', component: BCaseStudyComponent },
  { path: 'b-solutions', component: BSolutionsComponent },
  { path: 'b-testimonials', component: BTestimonialsComponent },
  { path: 'b-process', component: BProcessComponent },
  { path: 'b-why-us', component: BWhyUsComponent },
  { path: 'b-contact-us', component: BContactUsComponent },
  { path: 'r-why-us', component: RWhyUsComponent },
  { path: 'r-next-steps', component: RNextStepsComponent },
  {
    path: 'r-warranty-and-after-care',
    component: RWarrantyAndAfterCareComponent
  },
  { path: 'r-testimonials', component: RTestimonialsComponent },
  { path: 'r-products', component: RProductsComponent },
  { path: 'r-contact-us', component: RContactUsComponent },
  { path: 'a-team-and-work-with-us', component: ATeamAndWorkWithUsComponent },
  {
    path: 'a-mission-and-core-values',
    component: AMissionAndCoreValuesComponent
  },
  { path: 'a-our-group', component: AOurGroupComponent },
  { path: 'a-contact-us', component: AContactUsComponent },
  { path: 'a-social-entrepreneur', component: ASocialEntrepreneurComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
