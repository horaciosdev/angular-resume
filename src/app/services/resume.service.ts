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
    let newId = 1;
    if (this.resumeList.length) {
      newId = this.resumeList[this.resumeList.length - 1].id! + 1;
    }

    const newResume = {
      id: newId,
      name: 'Type your name',
      image: '',
      role: 'Type your role',
      about: {
        title: 'About me:',
        aboutText: `Type something about you.`,
      },
      contacts: [],
      follows: [],
      experiences: [],
      skills: [],
      interests: [],
    };

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
