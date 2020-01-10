import { TestBed } from "@angular/core/testing";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpHandler
} from "@angular/common/http";
import { RestService } from "./rest.service";

describe("RestService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [
        { provide: HttpHeaders, useValue: {} },
        HttpClient,
        { provide: HttpErrorResponse, useValue: {} },
        { provide: HttpHandler}
      ]
    })
  );

  it("should be created", () => {
    const service: RestService = TestBed.get(RestService);
    expect(service).toBeTruthy();
  });
});
