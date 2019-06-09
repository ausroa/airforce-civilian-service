import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService { // TODO add pagination for pages and add url for links
  private url = 'https://data.usajobs.gov/api/Search?Organization=AF&ResultsPerPage=10&DatePosted=7&PositionTitle=';
  private host = 'data.usajobs.gov';
  private userAgent = 'ausroa@gmail.com';
  private authKey = '8W6jnrySUa0PNrcug0gxHIbeE4s10/kOE5G4oyvmkxE=';

  private httpOptions = {
    headers: new HttpHeaders({
      'host': this.host,
      'User-Agent': this.userAgent,
      'Authorization-key': this.authKey
    })
  };

  constructor(private http: HttpClient) {
  }

  private extractData(res: Response) {
    const body = res;
    return body || {};
  }

  getJobs(title): Observable<any> {
    return this.http.get(`${this.url}${title}`, this.httpOptions).pipe(
      tap(jobs => console.log('Getting Jobs')),
      catchError(this.handleError<any>('getJobs')),
      map(this.extractData)
    );
  }

  getAllJobs() {
    return this.http.get('https://data.usajobs.gov/api/Search?Organization=AF&DatePosted=7', this.httpOptions).pipe(
      catchError(this.handleError<any>('getAllJobs')),
      map(this.extractData)
    );
  }

  private handleError<T>(operation, result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
