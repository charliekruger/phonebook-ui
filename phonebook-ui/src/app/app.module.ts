import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { EntriesComponent } from "./entries/entries.component";
import { EntryAddComponent } from "./entry-add/entry-add.component";
import { EntryDetailComponent } from "./entry-detail/entry-detail.component";
import { EntryEditComponent } from "./entry-edit/entry-edit.component";

import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatDialogModule } from "@angular/material";
import { ConfirmDialogComponent } from "./confirm-dialog/confirm-dialog.component";
import { ReactiveFormsModule } from "@angular/forms";
import { MyMaterialModule } from  './material.module';

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
    ConfirmDialogComponent
  ],
  imports: [
    MyMaterialModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmDialogComponent]
})
export class AppModule {}
