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

  public getRepositories(searchConfig: SearchConfig): Observable<any> {
    let endpoint = this.getRepositoriesEndpoint(searchConfig);

    return Observable.create((observer) => {
      return this.http.get(endpoint).map((res) => res.json())
        .subscribe((response) => {
          observer.next(response);
          observer.complete();
        }, (error) => {
          observer.error(error);
          observer.complete();
        });
    });
  }

  public getUsers(searchConfig: SearchConfig): Observable<GithubUser[]> {
    let endpoint = this.getUsersEndpoint(searchConfig);

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

  private getUsersEndpoint(searchConfig: SearchConfig) {
    let endpoint: string = `${this.usersEndpoint}${searchConfig.userName}`;

    let place = searchConfig.place;
    let page = searchConfig.page;
    let language = searchConfig.language;
    let itemsPerPage = searchConfig.itemsPerPage;

    if (place && !language) {
      return `${endpoint}+location:${place}&page=${page}&per_page=${itemsPerPage}`;
    } else if (!place && language) {
      return `${endpoint}+language:${language}&page=${page}&per_page=${itemsPerPage}`;
    }

    return `${endpoint}+location:${place}+language:${language}&page=${page}&per_page=${itemsPerPage}`;
  }

  private getRepositoriesEndpoint(searchConfig: SearchConfig) {
    let username = searchConfig.userName;
    let page = searchConfig.page;
    let itemsPerPage = searchConfig.itemsPerPage;

    return `${this.userDetailEndpoint}${username}/repos?per_page=${itemsPerPage}&page=${page}`;
  }
}
