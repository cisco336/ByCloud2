import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ContentService } from '../content.service';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  // encapsulation: ViewEncapsulation.Native
})
export class CarouselComponent implements OnInit {
  contents = [];
  selectedIndex: number;
  transform: number;
  constructor(private _contentService: ContentService) {
    this.selectedIndex = 0;
    this.transform = 100;
   }
  ngOnInit() {
    this._contentService.getContent()
        .subscribe(content => this.contents = content);
  }

  selected(x) {
    this.downSelected(x);
    this.selectedIndex = x;

   }

   keySelected(x) {
     this.downSelected(x);
     this.selectedIndex = x;
   }
   downSelected(i) {
      this.transform =  100 - (i) * 50;
      this.selectedIndex = this.selectedIndex + 1;
      if (this.selectedIndex > 4) {
        this.selectedIndex = 0;
      }
   }
}
