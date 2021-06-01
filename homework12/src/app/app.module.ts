import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { ContentModule } from './content/content.module';
import { ExpService } from './exp.service';
import { SkillsService } from './skills.service';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContentModule
  ],
  providers: [
    ExpService,
    SkillsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
