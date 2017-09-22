import {Component} from "@angular/core";
import {BreedService} from "../breed/breed.service";
import {GithubService} from "../../shared/services/github.service";
import {GithubUser} from "../../shared/model/github-user";
import {SearchConfig} from "./users.config";

@Component({
  selector: 'users',
  templateUrl: 'users.page.html'
})
export class UsersPageComponent {

  public loading: boolean;
  public users: GithubUser[];
  public searchConfig: SearchConfig = new SearchConfig();

  constructor(private githubService: GithubService) {
    this.getUsers();
  }

  private getUsers() {
    this.loading = true;
    this.githubService.getUsers(this.searchConfig).subscribe((users: GithubUser[]) => {
      this.loading = false;
      this.users = users;
    }, () => this.loading = false);
  }

  public nextPage() {
    if (this.loading) {
      return;
    }

    let page = this.searchConfig.pageNumber;
    this.searchConfig.pageNumber = page + 1;
    this.getUsers();
  }

  public previousPage() {
    if (this.loading) {
      return;
    }

    if (this.searchConfig.pageNumber > 1) {
      this.searchConfig.pageNumber = this.searchConfig.pageNumber - 1;
    }
    this.getUsers();
  }

  public showPaginator(): boolean {
    return !this.loading && this.users.length > 0;
  }
}
