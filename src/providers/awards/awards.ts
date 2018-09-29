import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AwardsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AwardsProvider {

  constructor(public http: HttpClient) {
    console.log('Hello AwardsProvider Provider');
  }

}
