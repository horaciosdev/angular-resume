import { Component } from '@angular/core';
import { Resume, Follow } from '../Resume';
import { SharedResumeService } from 'src/app/services/shared-resume.service';

@Component({
  selector: 'app-social',
  templateUrl: './follow.component.html',
  styleUrls: ['./follow.component.scss'],
})
export class SocialComponent {
  follows!: Follow[];
  constructor(private sharedResumeService: SharedResumeService) {}

  ngOnInit(): void {
    let resume = this.sharedResumeService.getResume();
    this.follows = resume.follows;
  }
}
