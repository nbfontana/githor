import {Routes} from "@angular/router";
import {RepositoriesPageComponent} from "./repositories.page";
import {RepositoriesGuard} from "./repositories.guard";

export const REPOSITORIES_ROUTES: Routes = [
  {
    path: '',
    canActivate: [RepositoriesGuard],
    component: RepositoriesPageComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
