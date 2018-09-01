import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api } from '../api/api';

/*
  Generated class for the UpzProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UpzProvider {

  endpoint: string = "upzs";

  constructor(
    public http: HttpClient,
    public api: Api
  ) {
    
  }

  getUPZs()
  {
    return this.api.get(this.endpoint, []);
  }

}
