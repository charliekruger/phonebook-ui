import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { MyMaterialModule } from "../../../material.module";
import { ConfirmDialogComponent } from "./confirm-dialog.component";
import { FormsModule } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

describe("ConfirmDialogComponent", () => {
  let component: ConfirmDialogComponent;
  let fixture: ComponentFixture<ConfirmDialogComponent>;

  const mockDialogRef = {
    close: jasmine.createSpy("close")
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MyMaterialModule],
      providers: [
        { provide: MatDialogRef, useValue: mockDialogRef },
        MyMaterialModule,
        FormsModule,
        {
          provide: MAT_DIALOG_DATA,
          useValue: { title: "whatever", description: "whatever" }
        }
      ],
      declarations: [ConfirmDialogComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
