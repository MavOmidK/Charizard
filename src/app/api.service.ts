import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Prospect } from './prospect';
import { Team } from './team';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrlProspects = 'http://localhost:3000/prospects'
const apiUrlTeams = 'http://localhost:3000/teams'

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

  getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(apiUrlTeams).pipe(
      tap(prospect => console.log('fetched teams')),
      catchError(this.handleError('getTeams', []))
    );
  }

  getProspects(): Observable<Prospect[]> {
    return this.http.get<Prospect[]>(apiUrlProspects).pipe(
      tap(prospect => console.log('fetched products')),
      catchError(this.handleError('getProspects', []))
    );
  }

  getProspect(id:any):Observable<Prospect> {
    const url = `${apiUrlProspects}/${id}`;
    return this.http.get<Prospect>(url).pipe(
      tap(_ => console.log(`fetched prospect id=${id}`)),
      catchError(this.handleError<Prospect>(`getProspectid=${id}`))
    );
  }

  addProspect(prospect:Prospect):Observable<Prospect> {
    return this.http.post<Prospect>(apiUrlProspects, prospect, httpOptions).pipe(
      tap((pros:Prospect) => console.log(`added prospect with id=${pros._id}`)),
      catchError(this.handleError<Prospect>(`addProspect`))
    );
  }

  updateProspect(id:any, prospect:any):Observable<any> {
    const url = `${apiUrlProspects}/${id}`;
    return this.http.put(url, prospect, httpOptions).pipe(
      tap(_ => console.log(`updated prospect id=${id}`)),
      catchError(this.handleError<any>(`updateProspect`))
    );
  }

  deleteProspect(id:any):Observable<Prospect> {
    const url = `${apiUrlProspects}/${id}`;

    return this.http.delete<Prospect>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted prospect id=${id}`)),
      catchError(this.handleError<Prospect>(`deleteProspect`))
    );
  }
}
