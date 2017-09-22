import {NgModule} from "@angular/core";
import {SharedModule} from "../../shared/shared.module";
import {RouterModule} from "@angular/router";
import {REPOSITORIES_ROUTES} from "./repositories.routing";
import {RepositoriesPageComponent} from "./repositories.page";
import {RepositoriesGuard} from "./repositories.guard";

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(REPOSITORIES_ROUTES)
  ],
  declarations: [
    RepositoriesPageComponent
  ],
  exports: [],
  providers: [
    RepositoriesGuard
  ]
})
export class RepositoriesModule {
  public static routes = REPOSITORIES_ROUTES;
}
