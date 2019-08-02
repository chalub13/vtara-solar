import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutTeamComponent } from './about-team/about-team.component';
import { AboutMissionComponent } from './about-mission/about-mission.component';
import { AboutCoreValuesComponent } from './about-core-values/about-core-values.component';
import { AboutContactUsComponent } from './about-contact-us/about-contact-us.component';
import { AboutWorkWithUsComponent } from './about-work-with-us/about-work-with-us.component';
import { AboutGroupComponent } from './about-group/about-group.component';
import { AboutBlogComponent } from './about-blog/about-blog.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about-team', component: AboutTeamComponent },
  { path: 'about-mission', component: AboutMissionComponent },
  { path: 'about-core-values', component: AboutCoreValuesComponent },
  { path: 'about-contact-us', component: AboutContactUsComponent },
  { path: 'about-work-with-us', component: AboutWorkWithUsComponent },
  { path: 'about-group', component: AboutGroupComponent },
  { path: 'about-blog', component: AboutBlogComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
