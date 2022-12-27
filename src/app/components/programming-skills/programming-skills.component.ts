import { Component } from '@angular/core';
import { Resume, Skill } from '../Resume';
import { SharedResumeService } from 'src/app/services/shared-resume.service';

@Component({
  selector: 'app-programming-skills',
  templateUrl: './programming-skills.component.html',
  styleUrls: ['./programming-skills.component.scss'],
})
export class ProgrammingSkillsComponent {
  programmingSkills!: Skill[];
  constructor(private sharedResumeService: SharedResumeService) {}
  ngOnInit(): void {
    let resume = this.sharedResumeService.getResume();
    this.programmingSkills = resume.programmingSkills;    
  }
}
