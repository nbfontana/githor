import {
  MatAutocompleteModule,
  MatButtonModule, MatCardModule,
  MatCheckboxModule,
  MatDialogModule,
  MatExpansionModule,
  MatInputModule,
  MatMenuModule,
  MatPaginatorIntl,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatTableModule,
  MatTabsModule,
  MatTooltipModule
} from "@angular/material";
import {NgModule} from "@angular/core";
import {CdkColumnDef, CdkTableModule} from "@angular/cdk/table";
import {SVMatPaginatorIntl} from "./sv-md-paginator-intl";

@NgModule({
  imports: [
    MatCardModule,
    MatExpansionModule,
    MatAutocompleteModule,
    MatTabsModule,
    MatTooltipModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    CdkTableModule,
    MatTableModule,
    MatMenuModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatProgressBarModule
  ],
  exports: [
    MatCardModule,
    MatExpansionModule,
    MatAutocompleteModule,
    MatTabsModule,
    MatTooltipModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    CdkTableModule,
    MatTableModule,
    MatMenuModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatProgressBarModule,
  ],
  providers: [
    CdkColumnDef,
    {
      provide: MatPaginatorIntl,
      useClass: SVMatPaginatorIntl
    }
  ]
})
export class SharedMaterialModule {
}
