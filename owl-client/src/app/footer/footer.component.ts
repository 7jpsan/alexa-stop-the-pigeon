import { Component, OnInit } from '@angular/core';
import { ColorizeService } from '../shared/colorize.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public iconColor;
  public colors$;

  constructor(private colorService: ColorizeService) { }

  ngOnInit() {
    this.colorService.getColor().subscribe((color) => {
      this.iconColor = color;
    });
  }

}
