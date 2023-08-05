import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  coloer = ['red', 'blue','green','yalow']
  name= "motaz";
  lastName = "allala";
  ss='https://picsum.photos/seed/picsum/500/300';

  myFun(){
    console.log("this is test");
    alert("this is test");
  }
  onChange(){
    alert("test");
  }
}
