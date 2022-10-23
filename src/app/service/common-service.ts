import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Company } from '../models/company';
import { Region } from '../models/region';

@Injectable({
  providedIn: 'root'
})
export class CommonService{

  constructor(private http: HttpClient) { }

  getCompanies():Observable<Company[]>{
    // TO DO
    //  load companies data from asset folder
    return this.http.get<Company[]>('../../assets/companies.json')
      .pipe( catchError(this.handleError));
 }

  getRegions():Observable<Region[]>{
    // TO DO
      //  load region data from asset folder
      return this.http.get<Region[]>('../../assets/regions.json')
      .pipe( catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }

    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
