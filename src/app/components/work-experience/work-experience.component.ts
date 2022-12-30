import { Component } from '@angular/core';
import { Resume, Career } from '../Resume';
import { SharedResumeService } from 'src/app/services/shared-resume.service';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss'],
})
export class WorkExperienceComponent {
  workExperiences!: Career[];

  constructor(private sharedResumeService: SharedResumeService) {}

  ngOnInit(): void {
    let resume = this.sharedResumeService.getResume();
    this.workExperiences = resume.workExperiences;
  }
}
