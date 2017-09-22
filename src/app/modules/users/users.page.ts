import {Component} from "@angular/core";
import {BreedService} from "../breed/breed.service";
import {GithubService} from "../../shared/services/github.service";
import {GithubUser} from "../../shared/model/github-user";
import {SearchConfig} from "./users.config";
import {MdDialog} from "@angular/material";
import {CommentUserDialogComponent} from "./comment-dialog/comment-user.dialog";

@Component({
  selector: 'users',
  templateUrl: 'users.page.html'
})
export class UsersPageComponent {

  public loading: boolean;
  public users: GithubUser[];
  public searchConfig: SearchConfig = new SearchConfig();

  constructor(private githubService: GithubService,
              private dialog: MdDialog) {
    this.getUsers();
  }

  public getUsers() {
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

    if (this.users.length === this.searchConfig.itemsPerPage) {
      this.searchConfig.page = this.searchConfig.page + 1;
    }

    this.getUsers();
  }

  public previousPage() {
    if (this.loading) {
      return;
    }

    if (this.searchConfig.page > 1) {
      this.searchConfig.page = this.searchConfig.page - 1;
    }
    this.getUsers();
  }

  public showNotFound(): boolean {
    return this.users && this.users.length === 0;
  }

  public showUsersAndPaginator(): boolean {
    return !this.loading && this.users.length > 0;
  }

  public commentUser(username: string): void {
    let dialogRef = this.dialog.open(CommentUserDialogComponent, {data: username});
    dialogRef.afterClosed().subscribe();
  }
}
