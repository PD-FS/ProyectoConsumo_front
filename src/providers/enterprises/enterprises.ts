import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api } from '../api/api';

/*
  Generated class for the EnterprisesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EnterprisesProvider {

 endpoint: string = "enterprises";
 
  constructor(
    public http: HttpClient,
    public api: Api
  
  ) {   }

  getAllEnterprises(params?: any) {
    return this.api.get(this.endpoint, [])
  }


}
