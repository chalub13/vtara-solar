import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ContentfulService } from './contentful.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { WhatshappeningComponent } from './whatshappening/whatshappening.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    WhatshappeningComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [ContentfulService],
  bootstrap: [AppComponent]
})
export class AppModule {
  contrauctor() {}
}
