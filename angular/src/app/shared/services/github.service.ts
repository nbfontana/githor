import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Http} from "@angular/http";
import {normalizeCallbackVariables} from "../utils/obj.utils";
import {GithubUser} from "../model/github-user";
import {SearchConfig} from "../../modules/users/users.config";

@Injectable()
export class GithubService {

  private usersEndpoint = 'https://api.github.com/search/users?q=';
  private userDetailEndpoint = 'https://api.github.com/users/';

  constructor(private http: Http) {
  }

  public getUsers(searchConfig: SearchConfig): Observable<GithubUser[]> {
    let endpoint = this.createPaginationEndpoint(searchConfig);

    return Observable.create((observer) => {
      return this.http.get(endpoint).map((res) => res.json())
        .subscribe((res) => {
          observer.next(this.normalizeUsersList(res.items || []));
          observer.complete();
        }, (error) => {
          observer.error(error);
          observer.complete();
        });
    });
  }

  public getDetailsByUserName(userName: string): Observable<GithubUser> {
    const endpoint = `${this.userDetailEndpoint}${userName}`;

    return Observable.create((observer) => {
      return this.http.get(endpoint).map((res) => res.json())
        .subscribe((user) => {
          observer.next(normalizeCallbackVariables(user));
          observer.complete();
        }, (error) => {
          observer.error(error);
          observer.complete();
        });
    });
  }

  private normalizeUsersList(usersList: any[]) {
    let normalizedUsersList = [];

    if (!usersList) {
      return normalizedUsersList;
    }

    usersList.forEach((user) => {
      normalizedUsersList.push(normalizeCallbackVariables(user));
    });

    return normalizedUsersList;
  }

  private createPaginationEndpoint(searchConfig: SearchConfig) {
    if (searchConfig.place && !searchConfig.language) {
      return `${this.usersEndpoint}${searchConfig.userName}+location:${searchConfig.place}&page=${searchConfig.page}&per_page=12`;
    } else if (!searchConfig.place && searchConfig.language) {
      return `${this.usersEndpoint}${searchConfig.userName}+language:${searchConfig.language}&page=${searchConfig.page}&per_page=12`;
    }

    return `${this.usersEndpoint}${searchConfig.userName}+location:${searchConfig.place}+language:${searchConfig.language}&page=${searchConfig.page}&per_page=12`;
  }
}
