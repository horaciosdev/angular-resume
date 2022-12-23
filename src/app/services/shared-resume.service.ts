import { Injectable } from '@angular/core';
import { Resume } from '../components/Resume';
import { ResumeService } from './resume.service';

@Injectable({
  providedIn: 'root',
})
export class SharedResumeService {
  resume!: Resume;

  constructor(private resumeService: ResumeService) {}

  setResume(id: number): void {
    if (!this.resume) {
      this.resumeService
        .getResume(id)
        .subscribe((resume) => (this.resume = resume));
    }

    if (this.resume.id !== id) {
      this.resumeService
        .getResume(id)
        .subscribe((resume) => (this.resume = resume));
    }
  }

  getResume(): Resume {
    return this.resume;
  }
}
