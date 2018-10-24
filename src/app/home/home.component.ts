import { Component, OnInit } from '@angular/core';
import { ContentService } from '../content.service';
import { Observable } from 'rxjs';
import { IContent } from '../interfaces/content';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public contents = [];
  constructor(private _contentService: ContentService) { }

  ngOnInit() {
    this._contentService.getContent()
      .subscribe((content) => {
        content.forEach((cont) => {
          if (cont.home ===  true) {
            this.contents.push(cont);
          }
        });
      });
  }

}
