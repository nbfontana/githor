import {NgModule, LOCALE_ID} from "@angular/core";
import {RouterModule, PreloadAllModules} from "@angular/router";
import {AppComponent} from "./app.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CommonModule} from "@angular/common";
import {SharedModule} from "app/shared/shared.module";
import {ShellModule} from "./shell/shell.module";
import {TranslateService} from "@ngx-translate/core";
import {ROUTES} from "./app.routes";
import {PageNotFoundPageComponent} from "./modules/page-not-found/page-not-found.page";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {HttpModule} from "@angular/http";
import {EmptyResponseBodyErrorInterceptor} from "./shared/empty-http-interceptor";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    PageNotFoundPageComponent
  ],
  imports: [
    HttpModule,
    CommonModule,
    BrowserAnimationsModule,
    ShellModule,
    SharedModule,
    RouterModule.forRoot(ROUTES, {useHash: true, preloadingStrategy: PreloadAllModules}),
  ],
  providers: [
    TranslateService,
    {
      provide: LOCALE_ID,
      useValue: "pt-br"
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: EmptyResponseBodyErrorInterceptor,
      multi: true,
    },
  ]
})
export class AppModule {
}
