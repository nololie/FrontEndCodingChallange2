import { Observable } from 'rxjs';
import { byTitledata, byTitleDatedata } from './search-results';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  constructor(private http: HttpClient) { }

  getMovieByTitle(title: string): Observable<byTitledata>{
    return this.http.get<byTitledata>(`http://www.omdbapi.com/?s=${title}&apikey=8f5303c6&`)
  }

  getMovieByTitleDate(title: string, year: number): Observable<byTitleDatedata>{
    return this.http.get<byTitleDatedata>(`http://www.omdbapi.com/?t=${title}&y=${year}&plot=full&apikey=8f5303c6&`)
  }
} 
