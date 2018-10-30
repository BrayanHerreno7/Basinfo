import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  getNotices() {
    return new Promise(resolve => {
      this.http.get('https://famc.net.co/basinfo/public/allnotices').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

}
