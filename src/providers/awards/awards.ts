import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api } from '../api/api';

/*
  Generated class for the AwardsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AwardsProvider {

 endpoint: string = "awards";
 
  constructor(
    public http: HttpClient,
    public api: Api
  
  ) {   }

  getAwardsByEnterprise(enterprise: string, params?: any) {
    return this.api.get(this.endpoint, [])
  }

  
}
