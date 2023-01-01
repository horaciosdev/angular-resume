import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTooltipModule } from '@angular/material/tooltip';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { HttpClientModule } from '@angular/common/http';
import { PhotoComponent } from './components/photo/photo.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { SocialComponent } from './components/Social/social.component';
import { InterestsComponent } from './components/interests/interests.component';
import { ResumeComponent } from './components/resume/resume.component';
import { IconComponent } from './components/icon/icon.component';
import { CardHeaderComponent } from './components/card-header/card-header.component';
import { SkillListComponent } from './components/skill-list/skill-list.component';
import { BarComponent } from './components/bar/bar.component';
import { CareerListComponent } from './components/career-list/career-list.component';
import { NameTagComponent } from './components/name-tag/name-tag.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SkillsComponent } from './components/skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MainContentComponent,
    PhotoComponent,
    AboutComponent,
    ContactComponent,
    SocialComponent,
    InterestsComponent,
    ResumeComponent,
    IconComponent,
    CardHeaderComponent,
    SkillListComponent,
    BarComponent,
    CareerListComponent,
    NameTagComponent,
    ExperienceComponent,
    SkillsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
