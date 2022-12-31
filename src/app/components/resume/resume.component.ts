import { Component } from '@angular/core';
import { ResumeService } from 'src/app/services/resume.service';
import { Resume } from '../Resume';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent {
  resume!: Resume;
  resumeList: any[] = [];

  constructor(
    private resumeService: ResumeService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getResumeList();
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.getResume(id);
  }

  getResume(id: number): void {
    if (this.resume) {
      if (this.resume.id === id) {
        return;
      }
    }
    this.resumeService
      .getResume(id)
      .subscribe((resume) => (this.resume = resume));
    console.log(this.resume.id);
  }

  getResumeList(): void {
    this.resumeService
      .getResumeList()
      .subscribe((resumeList) => (this.resumeList = resumeList));
  }

  selectResume(id: number){
    this.getResume(id);
  }
}
