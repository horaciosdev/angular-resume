import { Component } from '@angular/core';
import { Resume, SoftwareSkills } from '../Resume';
import { SharedResumeService } from 'src/app/services/shared-resume.service';

@Component({
  selector: 'app-software-skills',
  templateUrl: './software-skills.component.html',
  styleUrls: ['./software-skills.component.scss'],
})
export class SoftwareSkillsComponent {
  softwareSkills!: SoftwareSkills[];
  constructor(private sharedResumeService: SharedResumeService) {}
  ngOnInit(): void {
    let resume = this.sharedResumeService.getResume();
    this.softwareSkills = resume.softwareSkills;
  }
}
