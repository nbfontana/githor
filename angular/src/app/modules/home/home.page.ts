import {Component} from "@angular/core";
import {BreedService} from "../breed/breed.service";
import {GithubService} from "../../shared/services/github.service";

@Component({
  selector: 'home',
  templateUrl: 'home.page.html'
})
export class HomePageComponent {
  public loading: boolean;

  constructor(private githubService: GithubService) {
    this.githubService.getDetailsByUserName('').subscribe();
  }
}
