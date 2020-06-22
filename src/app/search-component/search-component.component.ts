import { FetchDataService } from './../fetch-data.service';
import { Observable } from "rxjs";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponentComponent implements OnInit {

  public APIresults: object;
  constructor(private search: FetchDataService) { }

  ngOnInit(): void {
    
  }

  request(){    
    this.search.getAPI("Twilight").subscribe(
      (data) => {
        this.APIresults = data.Search;
      })
  }
    
}
