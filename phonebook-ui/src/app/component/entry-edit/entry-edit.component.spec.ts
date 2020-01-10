import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { MyMaterialModule } from "../../material.module";
import { EntryEditComponent } from "./entry-edit.component";
import { FormsModule } from "@angular/forms";
import { Component, OnInit, Input } from "@angular/core";
import { RestService } from "../../../services/rest.service";
import { ActivatedRoute, Router } from "@angular/router";
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA } from "@angular/material";
import { ConfirmDialogComponent } from "../dialogs/confirm-dialog/confirm-dialog.component";
import { WarningDialogComponent } from "../dialogs/warning-dialog/warning-dialog.component";

describe("EntryEditComponent", () => {
  let component: EntryEditComponent;
  let fixture: ComponentFixture<EntryEditComponent>;

  const mockRestService = {
    close: jasmine.createSpy("getPhonebookEntries")
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MyMaterialModule, FormsModule],
      providers: [
        MyMaterialModule,
        { provide: MyMaterialModule, useValue: {} },
        { provide: FormsModule, useValue: {} },
        { provide: RestService, useValue: { mockRestService } },
        { provide: ActivatedRoute, useValue: {} },
        { provide: Router, useValue: {} },
        { provide: MatDialog, useValue: {} },
        { provide: MatDialogConfig, useValue: {} },
        { provide: ConfirmDialogComponent, useValue: {} },
        { provide: WarningDialogComponent, useValue: {} },
        {
          provide: MAT_DIALOG_DATA,
          useValue: { title: "whatever", description: "whatever" }
        }
      ],
      declarations: [EntryEditComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
