import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './shared/pages/about-me/about-me.component';
import { ContactMeComponent } from './shared/pages/contact-me/contact-me.component';
import { HomeComponent } from './shared/pages/home/home.component';
import { ProjectComponent } from './shared/pages/project/project.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about-me',
    component: AboutMeComponent,
  },
  {
    path: 'projects',
    component: ProjectComponent,
  },
  {
    path: 'contact-me',
    component: ContactMeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
