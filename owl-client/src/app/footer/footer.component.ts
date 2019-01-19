import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public iconColor = "red";

  private colors = ["red", "green", "pink", "blue", "purple", "black", "magenta"];

  constructor() { }

  ngOnInit() {
    let index = 0;
    setInterval(() => this.iconColor = this.colors[index++ % this.colors.length], 1000);
  }

}
