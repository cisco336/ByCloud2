import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ContentService } from '../content.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { map } from 'rxjs/operators';

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
    this._contentService.getContent().subscribe(content => {
        this.contents = content;
        console.log(this.contents);
        return this.contents;
      }
    );
  }
  ngOnInit() {
    console.log(this.contents);
  }
}
