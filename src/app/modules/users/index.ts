import {NgModule} from "@angular/core";
import {SharedModule} from "../../shared/shared.module";
import {RouterModule} from "@angular/router";
import {UsersPageComponent} from "./users.page";
import {USERS_ROUTES} from "./users.routing";
import {CommentUserDialogComponent} from "./comment/comment-user.dialog";

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(USERS_ROUTES)
  ],
  declarations: [
    UsersPageComponent,
    CommentUserDialogComponent
  ],
  entryComponents: [
    CommentUserDialogComponent
  ],
  exports: [],
  providers: []
})
export class UsersModule {
  public static routes = USERS_ROUTES;
}
