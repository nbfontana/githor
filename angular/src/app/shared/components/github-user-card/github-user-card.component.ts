import {Component, Input} from "@angular/core";
import {GithubUser} from "../../model/github-user";

@Component({
  selector: 'github-user-card',
  templateUrl: 'github-user-card.component.html',
  styleUrls: ['./github-user-card.component.scss']
})
export class GithubUserCardComponent {

  @Input() user: GithubUser;

  public openGithubInANewTab() {
    let win = window.open(this.user.htmlUrl, '_blank');
    win.focus();
  }
}

