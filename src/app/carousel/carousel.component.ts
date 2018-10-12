import { Directive, AfterViewInit, Component, OnInit, ContentChildren, QueryList } from '@angular/core';
import { CarouselItemDirective } from '../carousel-item.directive';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})

export class CarouselComponent implements OnInit {
  @ContentChildren(CarouselItemDirective) items: QueryList<CarouselItemDirective>;
  
  constructor() { }

  ngOnInit() {
  }
}
