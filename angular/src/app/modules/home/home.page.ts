import {Component} from "@angular/core";
import {BreedService} from "../breed/breed.service";

@Component({
  selector: 'home',
  templateUrl: 'home.page.html'
})
export class HomePageComponent {
  public loading: boolean;
}
