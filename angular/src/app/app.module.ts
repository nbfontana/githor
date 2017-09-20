import {HttpModule, Http} from "@angular/http";
import {NgModule, LOCALE_ID} from "@angular/core";
import {RouterModule, PreloadAllModules} from "@angular/router";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {AppComponent} from "./app.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CommonModule} from "@angular/common";
import {SharedModule} from "app/shared/shared.module";
import {ShellModule} from "./shell/shell.module";
import {TranslateModule, TranslateLoader, TranslateService} from "@ngx-translate/core";
import {ROUTES} from "./app.routes";

export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent
  ],
  imports: [
    HttpModule,
    CommonModule,
    BrowserAnimationsModule,
    ShellModule,
    SharedModule,
    RouterModule.forRoot(ROUTES, {useHash: true, preloadingStrategy: PreloadAllModules}),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [Http]
      }
    })
  ],
  providers: [
    TranslateService,
    {
      provide: LOCALE_ID,
      useValue: "pt-br"
    }
  ]
})
export class AppModule {
}
