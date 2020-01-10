import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { EntriesComponent } from "./component/entries/entries.component";
import { EntryAddComponent } from "./component/entry-add/entry-add.component";
import { EntryDetailComponent } from "./component/entry-detail/entry-detail.component";
import { EntryEditComponent } from "./component/entry-edit/entry-edit.component";

import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { MatDialogModule } from "@angular/material";
import { ConfirmDialogComponent } from "./component/dialogs/confirm-dialog/confirm-dialog.component";
import { ReactiveFormsModule } from "@angular/forms";
import { MyMaterialModule } from "./material.module";
import { WarningDialogComponent } from "./component/dialogs/warning-dialog/warning-dialog.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const appRoutes: Routes = [
  {
    path: "entries",
    component: EntriesComponent,
    data: { title: "Entries List" }
  },
  {
    path: "entry-detail/:id",
    component: EntryDetailComponent,
    data: { title: "Entry Details" }
  },
  {
    path: "entry-add",
    component: EntryAddComponent,
    data: { title: "Entry Add" }
  },
  {
    path: "entry-edit/:id",
    component: EntryEditComponent,
    data: { title: "Entry Edit" }
  },
  { path: "", redirectTo: "/entries", pathMatch: "full" }
];

@NgModule({
  declarations: [
    AppComponent,
    EntriesComponent,
    EntryAddComponent,
    EntryDetailComponent,
    EntryEditComponent,
    ConfirmDialogComponent,
    WarningDialogComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MyMaterialModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmDialogComponent, WarningDialogComponent]
})
export class AppModule {}
