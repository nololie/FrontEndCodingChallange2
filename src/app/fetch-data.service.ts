import { Observable } from 'rxjs';
import { SearchResult } from './search-results';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  constructor(private http: HttpClient) { }

  getAPI(title: string): Observable<SearchResult>{
    return this.http.get<SearchResult>(`http://www.omdbapi.com/?s=${title}&apikey=8f5303c6&`)
    }
} 
