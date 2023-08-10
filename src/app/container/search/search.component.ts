import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchText: string = '';
  @Output()
  onSearchTextChange: EventEmitter<string> = new EventEmitter<string>();

  onSearch(inputValue: HTMLInputElement) {
    //this.onSearchTextChange.emit(this.searchText);
    //console.log(inputValue.value);
    this.searchText = inputValue.value;
    this.onSearchTextChange.emit(inputValue.value);
    
  }
}
