import { Injectable } from '@angular/core';
import { Skills } from './skills'


@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  // constructor(private skillsService: SkillsService) { }

  getSkills(): Skills[] {
    return [
      {
        core: [
          'Strategy Development',
          'Communications',
          'Team Management',
          'Critical Thinking'],

        add: [
          'Good English skills',
          'Proficient in Microsoft Office, Google drive/Docs and Adobe Illustrator',
          'Moderate user of MacOS Pages, Numbers and Keynotes'
        ]
      }
    ];
  }
}
