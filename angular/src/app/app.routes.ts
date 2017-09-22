import {ShellComponent} from "./shell/shell.page";

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
      {path: '**', redirectTo: 'users', pathMatch: 'full'}
    ]
  },
  {
    path: '**',
    redirectTo: 'app',
    pathMatch: 'full'
  }
];
