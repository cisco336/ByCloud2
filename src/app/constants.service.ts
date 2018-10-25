import { Injectable } from '@angular/core';
import { IConstants } from './interfaces/constants';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {
  private _constants: string = '../assets/mock_data/constants.json';
  constructor(private http: HttpClient) {}

  getConstants(): Observable<IConstants[]> {
    return this.http.get<IConstants[]>(this._constants);
  }
}
