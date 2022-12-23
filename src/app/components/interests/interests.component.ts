import { Component } from '@angular/core';
import { Resume, Interests } from '../Resume';
import { SharedResumeService } from 'src/app/services/shared-resume.service';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.scss'],
})
export class InterestsComponent {
  interests!: Interests[];
  constructor(private sharedResumeService: SharedResumeService) {}
  ngOnInit(): void {
    let resume = this.sharedResumeService.getResume();
    this.interests = resume.interests;
  }
}
