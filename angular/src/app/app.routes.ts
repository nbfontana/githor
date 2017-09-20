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
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', loadChildren: './modules/home#HomeModule'},
      {path: '**', redirectTo: 'home', pathMatch: 'full'}
    ]
  },
  {
    path: '**',
    redirectTo: 'app',
    pathMatch: 'full'
  }
];
