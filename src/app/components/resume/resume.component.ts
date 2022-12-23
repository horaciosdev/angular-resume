import { Component } from '@angular/core';
import { Resume } from '../Resume';
import { SharedResumeService } from 'src/app/services/shared-resume.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent {  
  constructor(private sharedResumeService: SharedResumeService) {}

  ngOnInit(): void {
    this.setResume(1);
  }

  setResume(id: number): void {
    this.sharedResumeService.setResume(id);
  }
}
