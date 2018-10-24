import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ContentService } from '../content.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { map } from 'rxjs/operators';
import { observable } from 'rxjs';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  providers: [NgbCarouselConfig],
  encapsulation: ViewEncapsulation.Native
})
export class CarouselComponent implements OnInit {
  public contents = [];
  showNavigationArrows = false;
  showNavigationIndicators = false;
  constructor(config: NgbCarouselConfig, private _contentService: ContentService) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
    this._contentService.getContent()
    .subscribe((content) => {
        // this.contents = content;
        content.forEach((cont) => {
          this.contents.push(cont);
        });
      }
    ); console.log('Subscribe'); console.log(this.contents); console.log(this.contents.length);
  }
  ngOnInit() {
    console.log('Init');
    console.log(this.contents);
  }
}
