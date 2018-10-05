import { Component, OnInit } from '@angular/core';
import { ContentService } from '../content.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  public contents = [];
  constructor(private _contentService: ContentService) { }

  ngOnInit() {
    this._contentService.getContent()
        .subscribe(content => this.contents = content);
  }

}
