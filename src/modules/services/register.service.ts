import { Injectable } from '@angular/core';

// Service
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class APIService {
  constructor(private http: HttpClient) {}

  /**
   * getAPI
   */
  public getAPI(): Observable<any> {
    return this.http.get('../../db.json');
  }
}
