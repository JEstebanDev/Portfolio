import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ProjectComponent } from './pages/project/project.component';
import { ContactMeComponent } from './pages/contact-me/contact-me.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    NavComponent,
    HomeComponent,
    AboutMeComponent,
    ProjectComponent,
    ContactMeComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [CommonModule],
})
export class SharedModule {}
