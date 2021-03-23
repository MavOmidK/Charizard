import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Prospect } from './prospect';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'http://localhost:3000/api/v1/prospects'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }

  getProspects(): Observable<Prospect[]> {
    return this.http.get<Prospect[]>(apiUrl).pipe(
      tap(prospect => console.log('fetched products')),
      catchError(this.handleError('getProspects', []))
    );
  }

  getProspect(nhlid:any):Observable<Prospect> {
    const url = `${apiUrl}/${nhlid}`;
    return this.http.get<Prospect>(url).pipe(
      tap(_ => console.log(`fetched prospect nhlid=${nhlid}`)),
      catchError(this.handleError<Prospect>(`getProspectid=${nhlid}`))
    );
  }

  addProspect(prospect:Prospect):Observable<Prospect> {
    return this.http.post<Prospect>(apiUrl, prospect, httpOptions).pipe(
      tap((pros:Prospect) => console.log(`added prospect with id=${pros._nhlid}`)),
      catchError(this.handleError<Prospect>(`addProspect`))
    );
  }

  updateProspect(nhlid:any, prospect:any):Observable<any> {
    const url = `${apiUrl}/${nhlid}`;
    return this.http.put(url, prospect, httpOptions).pipe(
      tap(_ => console.log(`updated prospect nhlid=${nhlid}`)),
      catchError(this.handleError<any>(`updateProspect`))
    );
  }

  deleteProspect(nhlid:any):Observable<Prospect> {
    const url = `${apiUrl}/${nhlid}`;

    return this.http.delete<Prospect>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted prospect nhlid=${nhlid}`)),
      catchError(this.handleError<Prospect>(`deleteProspect`))
    );
    }
}
