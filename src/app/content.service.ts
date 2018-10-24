import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IContent } from './interfaces/content';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private _url: string = '../assets/mock_data/content.json';
  constructor(private http: HttpClient) { }

  getContent(): Observable<IContent[]> {
    return this.http.get<IContent[]>(this._url);
  }
}
