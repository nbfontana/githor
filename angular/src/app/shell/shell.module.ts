import {NgModule} from "@angular/core";
import {SharedModule} from "../shared/shared.module";
import {ShellComponent} from "./shell.page";
import {RouterModule} from "@angular/router";
import {CollapseModule} from "ngx-bootstrap";

@NgModule({
  imports: [
    SharedModule,
    RouterModule,
    CollapseModule.forRoot()
  ],
  declarations: [
    ShellComponent
  ],
  exports: [],
  providers: []
})
export class ShellModule {
}
