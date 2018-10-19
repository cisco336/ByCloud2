import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ContentService } from '../content.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  providers: [NgbCarouselConfig],
  encapsulation: ViewEncapsulation.Native
})
export class CarouselComponent implements OnInit {
  contents = [];
  images = [];
  selectedIndex: number;
  transform: number;
  showNavigationArrows = false;
  showNavigationIndicators = false;
  constructor(config: NgbCarouselConfig, private _contentService: ContentService) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
    this.selectedIndex = 0;
    this.transform = 100;
  }
  ngOnInit() {
    return this._contentService.getContent()
    .subscribe(content => {
      this.contents = content;
      console.log(this.contents);
    });
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
      // this.transform =  100 - (i) * 50;
      this.selectedIndex = this.selectedIndex + 1;
      if (this.selectedIndex > 4) {
        this.selectedIndex = 0;
      }
   }
}
