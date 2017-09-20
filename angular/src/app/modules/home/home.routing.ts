import {Routes} from "@angular/router";
import {HomePageComponent} from "./home.page";

export const HOME_ROUTES: Routes = [
  {
    path: '',
    component: HomePageComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
