import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FileExistsService {
  constructor(private http: HttpClient) {}

  checkFileExists(url: string): Observable<boolean> {
    return this.http.head(url).pipe(
      map((response) => {
        return true;
      }),
      catchError((error) => {
        return of(false);
      })
    );
  }
}
