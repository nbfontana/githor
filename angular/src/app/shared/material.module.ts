import {
  MdAutocompleteModule,
  MdButtonModule,
  MdCheckboxModule,
  MdDialogModule,
  MdExpansionModule,
  MdInputModule,
  MdMenuModule,
  MdPaginatorIntl,
  MdPaginatorModule,
  MdProgressBarModule,
  MdProgressSpinnerModule,
  MdTableModule,
  MdTabsModule,
  MdTooltipModule
} from "@angular/material";
import {NgModule} from "@angular/core";
import {CdkColumnDef, CdkTableModule} from "@angular/cdk/table";
import {SVMdPaginatorIntl} from "./sv-md-paginator-intl";

@NgModule({
  imports: [
    MdExpansionModule,
    MdAutocompleteModule,
    MdTabsModule,
    MdTooltipModule,
    MdDialogModule,
    MdProgressSpinnerModule,
    MdPaginatorModule,
    CdkTableModule,
    MdTableModule,
    MdMenuModule,
    MdButtonModule,
    MdInputModule,
    MdCheckboxModule,
    MdProgressBarModule
  ],
  exports: [
    MdExpansionModule,
    MdAutocompleteModule,
    MdTabsModule,
    MdTooltipModule,
    MdDialogModule,
    MdProgressSpinnerModule,
    MdPaginatorModule,
    CdkTableModule,
    MdTableModule,
    MdMenuModule,
    MdButtonModule,
    MdInputModule,
    MdCheckboxModule,
    MdProgressBarModule,
  ],
  providers: [
    CdkColumnDef,
    {
      provide: MdPaginatorIntl,
      useClass: SVMdPaginatorIntl
    }
  ]
})
export class SharedMaterialModule {
}
