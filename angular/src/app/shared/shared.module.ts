import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedMaterialModule} from "app/shared/material.module";
import {NgxBrModule} from "ngx-br";
import {NgxUtilitiesModule} from "ngx-utilities";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedMaterialModule,
    NgxBrModule.forRoot(),
    NgxUtilitiesModule.forRoot()
  ],
  declarations: [],
  entryComponents: [],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedMaterialModule,
    NgxBrModule,
    NgxUtilitiesModule
  ],
  providers: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule {
}
