import {NgModule} from "@angular/core";
import {SharedModule} from "../../shared/shared.module";
import {RouterModule} from "@angular/router";
import {HomePageComponent} from "./home.page";
import {HOME_ROUTES} from "./home.routing";

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(HOME_ROUTES)
  ],
  declarations: [
    HomePageComponent
  ],
  exports: [],
  providers: []
})
export class HomeModule {
  public static routes = HOME_ROUTES;
}
