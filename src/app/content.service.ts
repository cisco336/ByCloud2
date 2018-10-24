import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IContent } from './interfaces/content';
import { Observable } from 'rxjs';
import { map, filter, scan } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private _url: '../assets/mock_data/content.json';
  constructor(private http: HttpClient) { }

  getContent(): Observable<IContent[]> {
    return this.http.get<IContent[]>(this._url);
  }
}
