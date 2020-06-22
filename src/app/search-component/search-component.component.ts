import { FetchDataService } from './../fetch-data.service';
import { Observable } from "rxjs";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponentComponent implements OnInit {

  private value;
  public APIresults: object;
  constructor(private search: FetchDataService) { }

  ngOnInit(): void {
    
  }
 
  request(){  
    event.preventDefault();
    this.search.getAPI(this.value).subscribe(
      (data) => {
        let Data = data
        this.APIresults = Data.Search;
      })
  }

  inputValue(value){
    this.value = value
    return this.value;
  }
    
}
