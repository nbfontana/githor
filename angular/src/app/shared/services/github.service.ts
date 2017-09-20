import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {

  private usersEndpoint = 'https://api.github.com/search/users?q=';
  private userDetailEndpoint = 'https://api.github.com/users/';

  // const url = `${this.userDetailEndpoint}${userName}/repos`;
  // getUsersByPlaceAndLanguage(place: string, language: string, page = 1) {
  // url = `${this.usersEndpoint}location:${place}+language:${language}&page=${page}`;

  constructor(private http: Http) {
  }

  public getDetailsByUserName(userName: string): Observable<any> {
    const endpoint = `${this.userDetailEndpoint}${userName}`;

    return Observable.create((observer) => {
      return this.http.get(endpoint).map((res: Response) => res.json())
        .subscribe((user) => {
          observer.next(user);
          observer.complete();
        }, (error) => {
          observer.error(error);
          observer.complete();
        });
    });
  }

  // private extractData(res: Response) {
  //   const body = res.json();
  //   return body.items || {};
  // }
  //
  // private handleError(error: Response | any) {
  //   let errMsg: string;
  //   if (error instanceof Response) {
  //     const body = error.json() || '';
  //     const err = body.error || JSON.stringify(body);
  //     errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
  //   } else {
  //     errMsg = error.message ? error.message : error.toString();
  //   }
  //   console.error(errMsg);
  //   return Observable.throw(errMsg);
  // }

}
