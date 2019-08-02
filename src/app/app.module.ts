import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutTeamComponent } from './about-team/about-team.component';
import { AboutMissionComponent } from './about-mission/about-mission.component';
import { AboutCoreValuesComponent } from './about-core-values/about-core-values.component';
import { AboutContactUsComponent } from './about-contact-us/about-contact-us.component';
import { AboutWorkWithUsComponent } from './about-work-with-us/about-work-with-us.component';
import { AboutGroupComponent } from './about-group/about-group.component';
import { AboutBlogComponent } from './about-blog/about-blog.component';
import { ContentfulService } from './contentful.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutTeamComponent,
    AboutMissionComponent,
    AboutCoreValuesComponent,
    AboutContactUsComponent,
    AboutWorkWithUsComponent,
    AboutGroupComponent,
    AboutBlogComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [ContentfulService],
  bootstrap: [AppComponent]
})
export class AppModule {
  contrauctor() {}
}
