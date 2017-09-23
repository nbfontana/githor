import {Component, EventEmitter, Input, Output} from "@angular/core";
import {GithubUser} from "../../../modules/users/github-user";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'github-user-card',
  templateUrl: 'github-user-card.component.html',
  styleUrls: ['./github-user-card.component.scss']
})
export class GithubUserCardComponent {

  @Input() user: GithubUser;
  @Output() commentEvt = new EventEmitter();

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  public openGithubInANewTab() {
    let win = window.open(this.user.htmlUrl, '_blank');
    win.focus();
  }

  public comment(): void {
    this.commentEvt.next(this.user.login);
  }

  public goToRepos() {
    this.router.navigate(['../../repositories'], {
      queryParams: {username: this.user.login},
      relativeTo: this.activatedRoute
    })
  }
}

