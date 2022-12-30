import { Component } from '@angular/core';
import { SharedResumeService } from 'src/app/services/shared-resume.service';
import { Resume } from '../Resume';

@Component({
  selector: 'app-name-tag',
  templateUrl: './name-tag.component.html',
  styleUrls: ['./name-tag.component.scss']
})
export class NameTagComponent {
  name: string = '';
  role: string = '';

  constructor(    
    private sharedResumeService: SharedResumeService
  ) {}

  ngOnInit(): void {
    let resume: Resume = this.sharedResumeService.getResume();
    this.name = resume.name;    
    this.role = resume.role;    
  }
}
