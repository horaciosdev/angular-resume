import { Injectable } from '@angular/core';
import { RESUMES } from 'src/mock-resumes';
import { Resume } from '../components/Resume';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ResumeService {
  constructor(private router: Router) {}
  getResume(id: number): Observable<Resume> {
    let resume = RESUMES.find((r) => r.id === id)!;
    if (resume === undefined) {
      resume = RESUMES.find((r) => r.id === 1)!;
    }
    return of(resume);
  }

  getResumeList(): Observable<{ id?: number; name: string }[]> {
    const resumeList: { id?: number; name: string }[] = [...RESUMES].map(
      ({ id, name }) => ({ id, name })
    );
    return of(resumeList);
  }
}
