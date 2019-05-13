import { Injectable } from '@angular/core';

@Injectable()
export class APIService {
  constructor() {}

  /**
   * getAPI
   */
  public getAPI() {
    const API = require('../../db.json');
    return API;
  }
}
