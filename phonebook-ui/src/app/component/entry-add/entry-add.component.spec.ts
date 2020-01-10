import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { MyMaterialModule } from "../../material.module";
import { EntryAddComponent } from "./entry-add.component";
import { FormsModule } from "@angular/forms";
import { RestService } from "../../../services/rest.service";
import { ActivatedRoute, Router } from "@angular/router";
import { MatDialog, MatDialogConfig } from "@angular/material";
import { ConfirmDialogComponent } from "../dialogs/confirm-dialog/confirm-dialog.component";
import { WarningDialogComponent } from "../dialogs/warning-dialog/warning-dialog.component";
import { HttpHandler } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe("EntryAddComponent", () => {
  let component: EntryAddComponent;
  let fixture: ComponentFixture<EntryAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MyMaterialModule, FormsModule, BrowserAnimationsModule],
      providers: [
        { provide: RestService, useValue: {} },
        { provide: HttpHandler, useValue: {} },
        { provide: ActivatedRoute, useValue: {} },
        { provide: Router, useValue: {} },
        MatDialog
      ],
      declarations: [EntryAddComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
