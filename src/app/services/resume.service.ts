import { Injectable } from '@angular/core';
import { RESUMES } from 'src/mock-resumes';
import { Resume } from '../components/Resume';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ResumeService {
  getResume(id: number): Observable<Resume> {
    const resume = RESUMES.find((r) => r.id === id)!;
    return of(resume);
  }

  getResumeList(): Observable<{id?: number, name: string}[]>{
    const resumeList: {id?: number, name: string}[] = [...RESUMES].map(( {id, name})=> ({ id, name}));
    return of(resumeList);
  }
}
