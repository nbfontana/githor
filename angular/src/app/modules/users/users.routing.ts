import {Routes} from "@angular/router";
import {UsersPageComponent} from "./users.page";

export const USERS_ROUTES: Routes = [
  {
    path: '',
    component: UsersPageComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
