import {Component, Input} from "@angular/core";
import {GithubRepository} from "../../../modules/repositories/repository";

@Component({
  selector: 'github-repository-card',
  templateUrl: 'github-repository-card.component.html',
  styleUrls: ['./github-repository-card.component.scss']
})
export class GithubRepositoryCardComponent {

  @Input() repo: GithubRepository;

  public openInGithub() {
    let win = window.open(this.repo.htmlUrl, '_blank');
    win.focus();
  }
}

