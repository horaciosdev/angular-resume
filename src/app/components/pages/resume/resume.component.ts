import { Component } from '@angular/core';
import { ResumeService } from 'src/app/services/resume.service';
import { Resume } from '../../Resume';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent {
  resume!: Resume;
  resumeList: Resume[] = [];

  constructor(
    private resumeService: ResumeService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getResumeList();
    if (this.resumeList.length) {
      let id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
      if (!id) {
        if (this.resumeList[0].id) {
          id = this.resumeList[0].id;
        }
      }

      this.getResume(id);
      this.router.navigate(['/resume', id]);
    } else {
      this.router.navigate(['/resume']);
    }
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
  }

  getResumeList(): void {
    this.resumeService
      .getResumeList()
      .subscribe((resumeList) => (this.resumeList = resumeList));
  }

  selectResume(id: number) {
    this.getResume(id);
  }

  addResume(): void {
    this.resumeService.addResume().subscribe((response) => {
      this.resumeList = response;
      this.resume = this.resumeList[this.resumeList.length - 1];
    });
  }
}
