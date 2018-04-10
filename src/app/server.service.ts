import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

@Injectable()

export class ServerService {
  constructor(private httpClient: HttpClient) {}

  storeServers(servers: any[]) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })
    return this.httpClient.put('https://udemy-ng-7bde8.firebaseio.com/data.json',
      servers,
      { headers: headers });
    // .json is firebase specific
  }

  getServers(servers: any[]) {
    return this.httpClient.get('https://udemy-ng-7bde8.firebaseio.com/data.json')
      // .map((response: HttpResponse) => {
      //   const data = response.json()
      // })
      .catch((error: HttpResponse) => {
        return Observable.throw("Something went wrong")
        // this could, for example, be displayed to the user via a modal
      })
  }

  getAppName() {
      return this.httpClient.get('https://udemy-ng-7bde8.firebaseio.com/appName.json')
  }
}
