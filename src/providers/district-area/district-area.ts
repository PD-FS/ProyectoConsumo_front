import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api } from '../api/api';

/*
  Generated class for the DistrictAreaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DistrictAreaProvider {

  endpoint: string = "district_areas";

  constructor(
    public http: HttpClient,
    public api: Api
  
  ) {   }

  query(params?: any) {
    return this.api.get(this.endpoint, [])
  }

}
