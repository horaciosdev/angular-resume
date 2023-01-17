import { Injectable } from '@angular/core';
import { RESUMES } from 'src/mock-resumes';
import { Resume } from '../components/Resume';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ResumeService {
  resumeList: Resume[] = RESUMES;

  constructor(private router: Router) {}

  addResume(): Observable<Resume[]> {
    let newResume = { ...this.resumeList[this.resumeList.length - 1] };
    let newId = newResume.id! + 1;
    newResume.id = newId;
    this.resumeList = [...this.resumeList, newResume];

    return of(this.resumeList);
  }

  getResume(id: number): Observable<Resume> {
    let resume = this.resumeList.find((r) => r.id === id)!;
    if (resume === undefined) {
      resume = this.resumeList.find((r) => r.id === 1)!;
    }
    return of(resume);
  }

  getResumeList(): Observable<Resume[]> {
    return of(this.resumeList);
  }
}
