import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ProjectComponent } from './pages/project/project.component';
import { ContactMeComponent } from './pages/contact-me/contact-me.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SharedRoutingModule } from './shared-routing.module';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { BiographyComponent } from './components/biography/biography.component';
import { InterestsComponent } from './components/interests/interests.component';
import { EducationComponent } from './components/education/education.component';
import { SideBarProjectComponent } from './components/side-bar-project/side-bar-project.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { HttpClientModule } from '@angular/common/http';
import { SideBarContactComponent } from './components/side-bar-contact/side-bar-contact.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { SnippetContactComponent } from './components/snippet-contact/snippet-contact.component';
import { SnippetsComponent } from './components/snippets/snippets.component';
import { MainComponent } from './pages/main/main.component';

@NgModule({
  declarations: [
    NavComponent,
    HomeComponent,
    AboutMeComponent,
    ProjectComponent,
    ContactMeComponent,
    HeaderComponent,
    FooterComponent,
    SideBarComponent,
    BiographyComponent,
    InterestsComponent,
    EducationComponent,
    SideBarProjectComponent,
    ProjectsComponent,
    SideBarContactComponent,
    ContactFormComponent,
    SnippetContactComponent,
    SnippetsComponent,
    MainComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
})
export class SharedModule {}
