import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent {
  listOfString :string[] = ["motaz",'sami','ahmad','ali']

  searchText: string = '';
  fromSearchBox(searchValue: string){
    this.searchText = searchValue;
  }
}
