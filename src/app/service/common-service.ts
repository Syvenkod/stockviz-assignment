import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from '../models/company';
import { Region } from '../models/region';

@Injectable({
  providedIn: 'root'
})
export class CommonService{

  constructor(private http: HttpClient) { }

  getCompanies():Observable<Company[]>|unknown{
    // TO DO 
    //  load companies data from asset folder 
    
      return  null
  }
  getRegions():Observable<Region[]>|unknown{
    // TO DO 
      //  load region data from asset folder 
      return null
  }

}
