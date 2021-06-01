import { Component, OnInit } from '@angular/core';
// import { SKILLS } from 'src/app/mock-skills';
import { SkillsService } from 'src/app/skills.service';
import { Skills } from '../../skills';



@Component({
  selector: 'app-skills-content',
  templateUrl: './skills-content.component.html',
  styleUrls: ['./skills-content.component.css']
})
export class SkillsContentComponent implements OnInit {
  skills: Skills[];

  constructor(private skillsService: SkillsService) { }

  ngOnInit(): void {
    this.getSkills();
  }

  getSkills(): void {
    this.skills = this.skillsService.getSkills();
  }

}
