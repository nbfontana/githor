import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedMaterialModule} from "app/shared/material.module";
import {NgxBrModule} from "ngx-br";
import {NgxUtilitiesModule} from "ngx-utilities";
import {GithubService} from "./services/github.service";
import {GithubUserCardComponent} from "./components/github-user-card/github-user-card.component";
import {LoadingComponent} from "./components/githor-loading/loading.component";
import {GithubUsersPaginatorComponent} from "./components/github-users-paginator/github-users-paginator.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedMaterialModule,
    NgxBrModule.forRoot(),
    NgxUtilitiesModule.forRoot()
  ],
  declarations: [
    GithubUsersPaginatorComponent,
    GithubUserCardComponent,
    LoadingComponent
  ],
  entryComponents: [],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedMaterialModule,
    NgxBrModule,
    NgxUtilitiesModule,
    GithubUserCardComponent,
    GithubUsersPaginatorComponent,
    LoadingComponent
  ],
  providers: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    GithubService
  ]
})
export class SharedModule {
}
