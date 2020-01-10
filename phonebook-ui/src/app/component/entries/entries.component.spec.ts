import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { EntriesComponent } from "./entries.component";
import { MyMaterialModule } from "../../material.module";
import { ActivatedRoute, Router, RouterModule } from "@angular/router";
import { MatDialog, MatDialogConfig } from "@angular/material";
import { ConfirmDialogComponent } from "../dialogs/confirm-dialog/confirm-dialog.component";
import { RestService } from "../../../services/rest.service";
import { subscribeOn } from "rxjs/operators";
import { observable, Observable } from "rxjs";
import { promise } from "protractor";

describe("EntriesComponent", () => {
  let component: EntriesComponent;
  let fixture: ComponentFixture<EntriesComponent>;

  const mockRestService = {
    getPhonebookEntries: jasmine.createSpy("getPhonebookEntries", () => {
      return new Observable<any>();
    })
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MyMaterialModule, FormsModule, RouterModule],
      providers: [
        { provide: RestService, useValue: mockRestService },
        { provide: ActivatedRoute, useValue: {} },
        { provide: Router, useValue: {} },
        MatDialog,
        MatDialogConfig
      ],
      declarations: [EntriesComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntriesComponent);
    component = fixture.componentInstance;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
