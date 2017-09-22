import {ShellComponent} from "./shell/shell.page";
import {PageNotFoundPageComponent} from "./modules/page-not-found/page-not-found.page";

export const ROUTES = [
  {
    path: '',
    redirectTo: 'app',
    pathMatch: 'full'
  },
  {
    path: 'app',
    component: ShellComponent,
    children: [
      {path: '', redirectTo: 'users', pathMatch: 'full'},
      {path: 'users', loadChildren: './modules/users#UsersModule'},
      {path: 'repositories', loadChildren: './modules/repositories#RepositoriesModule'},
      {path: '**', redirectTo: 'users', pathMatch: 'full'}
    ]
  },
  {
    path: 'page-not-found',
    component: PageNotFoundPageComponent
  },
  {
    path: '**',
    redirectTo: 'page-not-found',
    pathMatch: 'full'
  }
];
