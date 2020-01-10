import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { MyMaterialModule } from "../../../material.module";
import { WarningDialogComponent } from "./warning-dialog.component";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

describe("WarningDialogComponent", () => {
  let component: WarningDialogComponent;
  let fixture: ComponentFixture<WarningDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MyMaterialModule, FormsModule, RouterModule],
      providers: [
        { provide: MatDialogRef, withValue: {} },
        {
          provide: MAT_DIALOG_DATA,
          useValue: { title: "whatever", description: "whatever" }
        }
      ],
      declarations: [WarningDialogComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarningDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
