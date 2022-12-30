import { Component } from '@angular/core';
import { Resume, Career } from '../Resume';
import { SharedResumeService } from 'src/app/services/shared-resume.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  educationArr!: Career[];

  constructor(private sharedResumeService: SharedResumeService) {}

  ngOnInit(): void {
    let resume = this.sharedResumeService.getResume();
    this.educationArr = resume.educationArr;
  }
}
