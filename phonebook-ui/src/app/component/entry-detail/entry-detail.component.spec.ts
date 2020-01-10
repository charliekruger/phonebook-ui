import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { MyMaterialModule } from "../../material.module";
import { EntryDetailComponent } from "./entry-detail.component";
import { FormsModule } from "@angular/forms";
import { ActivatedRoute, Router, RouterModule } from "@angular/router";
import { RestService } from "../../../services/rest.service";
import { Observable } from 'rxjs';

describe("EntryDetailComponent", () => {
  let component: EntryDetailComponent;
  let fixture: ComponentFixture<EntryDetailComponent>;

  const mockRestService = {
    getEntry: jasmine.createSpy("getEntry", () => {
      return new Observable<any>();
    })
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MyMaterialModule, FormsModule, RouterModule],
      providers: [
        FormsModule,
        MyMaterialModule,
        { provide: MyMaterialModule, useValue: {} },
        { provide: FormsModule, useValue: {} },
        { provide: RestService, useValue: mockRestService },
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { params: { 'id': "1" } } }
        },
        { provide: Router, useValue: {} }
      ],
      declarations: [EntryDetailComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryDetailComponent);
    component = fixture.componentInstance;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
