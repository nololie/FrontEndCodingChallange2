import { FetchDataService } from './../fetch-data.service';
import { Observable } from "rxjs";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponentComponent implements OnInit {

  private searchValue;
  public APIbyTitleRequestResults: object; 
  public APIbyTitleDateRequestResults : object;
  constructor(private search: FetchDataService) { }

  ngOnInit(): void {
    
  }
 
  requestByTitle(){  
    event.preventDefault();
    this.search.getMovieByTitle(this.searchValue).subscribe(
      (data) => {
        this.APIbyTitleRequestResults = data.Search;
      })
  }

  requestByTitleDate(title:string, year: number){
    event.preventDefault;
    this.search.getMovieByTitleDate( title, year).subscribe(
      (data) => {
        console.log(data);
        
        this.APIbyTitleDateRequestResults = data;
      })
      console.log(this.APIbyTitleDateRequestResults[0].Title);
      
  }

  inputValue(value){
    this.searchValue = value
    return this.searchValue;
  }
    
}
