import { Component } from '@angular/core';
import { SharedResumeService } from 'src/app/services/shared-resume.service';
import { Resume } from '../Resume';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  about: string = '';
  constructor(private sharedResumeService: SharedResumeService) {}
  ngOnInit(): void {
    this.about = this.sharedResumeService.getResume().about;
  }
}
