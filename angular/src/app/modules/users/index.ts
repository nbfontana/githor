import {NgModule} from "@angular/core";
import {SharedModule} from "../../shared/shared.module";
import {RouterModule} from "@angular/router";
import {UsersPageComponent} from "./users.page";
import {USERS_ROUTES} from "./users.routing";

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(USERS_ROUTES)
  ],
  declarations: [
    UsersPageComponent
  ],
  exports: [],
  providers: []
})
export class UsersModule {
  public static routes = USERS_ROUTES;
}
