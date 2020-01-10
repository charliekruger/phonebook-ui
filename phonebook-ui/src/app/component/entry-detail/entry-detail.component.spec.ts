import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { MyMaterialModule } from "../../material.module";
import { EntryDetailComponent } from "./entry-detail.component";
import { FormsModule } from "@angular/forms";
import { ActivatedRoute, Router, RouterModule } from "@angular/router";
import { RestService } from "../../../services/rest.service";

describe("EntryDetailComponent", () => {
  let component: EntryDetailComponent;
  let fixture: ComponentFixture<EntryDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MyMaterialModule, FormsModule, RouterModule],
      providers: [
        FormsModule,
        MyMaterialModule,
        { provide: MyMaterialModule, useValue: {} },
        { provide: FormsModule, useValue: {} },
        { provide: RestService, useValue: {} },
        { provide: ActivatedRoute, useValue: {} },
        { provide: Router, useValue: {} }
      ],
      declarations: [EntryDetailComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
