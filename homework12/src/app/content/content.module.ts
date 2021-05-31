import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeContentComponent } from './home-content/home-content.component';
import { AboutContentComponent } from './about-content/about-content.component';
import { ExpContentComponent } from './exp-content/exp-content.component';
import { SkillsContentComponent } from './skills-content/skills-content.component';
import { ContactContentComponent } from './contact-content/contact-content.component';



@NgModule({
  declarations: [
    HomeContentComponent,
    AboutContentComponent,
    ExpContentComponent,
    SkillsContentComponent,
    ContactContentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeContentComponent,
    AboutContentComponent,
    ExpContentComponent,
    SkillsContentComponent,
    ContactContentComponent
  ]
})
export class ContentModule { }
