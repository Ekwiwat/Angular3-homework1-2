import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentModule } from './content/content.module';
import { Routes, RouterModule } from '@angular/router';
import { HomeContentComponent } from './content/home-content/home-content.component';
import { AboutContentComponent } from './content/about-content/about-content.component';
import { ExpContentComponent } from './content/exp-content/exp-content.component';
import { SkillsContentComponent } from './content/skills-content/skills-content.component';
import { ContactContentComponent } from './content/contact-content/contact-content.component';

const routes: Routes = [
  { path: "", component: HomeContentComponent },
  { path: "about", component: AboutContentComponent },
  { path: "experiences", component: ExpContentComponent },
  { path: "skills", component: SkillsContentComponent },
  { path: "contact", component: ContactContentComponent },
  { path: "", pathMatch: 'full', redirectTo: 'home' }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ContentModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
