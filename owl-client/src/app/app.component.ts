import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Stop the pigeon';
  selectedValue: string = "";

  options = [];
  constructor(){
    const x = Array(50).fill(0).forEach((x,i)=>this.options.push(i));
  }
  
  items = [
    { value: "0", view: "zero" },
    { value: "1", view: "one" },
    { value: "2", view: "Two" },
  ];
}
