import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchText : string = 'Mans xx';

  changeText(event : any){
    this.searchText = event.target.value;
  }
}
