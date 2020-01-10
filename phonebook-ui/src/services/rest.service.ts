import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { Observable, of } from "rxjs";
import { map, catchError, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class RestService {
  endpoint = "https://localhost:5001/";
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };

  constructor(private http: HttpClient) {}

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  getPhonebookEntries(): Observable<any> {
    return this.http
      .get(this.endpoint + "contacts")
      .pipe(map(this.extractData));
  }

  getEntry(id): Observable<any> {
    return this.http
      .get(this.endpoint + "contacts/" + id)
      .pipe(map(this.extractData));
  }

  addEntry(contact): Observable<any> {
    console.log(contact);
    return this.http
      .post<any>(
        this.endpoint + "contacts",
        JSON.stringify(contact),
        this.httpOptions
      )
      .pipe(
        tap(contact => console.log(`added contact w/ id=${contact.PhonebookEntryId}`)),
        catchError(this.handleError<any>("addEntry"))
      );
  }

  updateEntry(contact): Observable<any> {
    return this.http
      .put<any>(
        this.endpoint + "contacts",
        JSON.stringify(contact),
        this.httpOptions
      )
      .pipe(
        tap(contact => console.log(`updated contact w/ id=${contact.phonebookEntryId}`)),
        catchError(this.handleError<any>("updateEntry"))
      );
  }

  deleteEntry(id): Observable<any> {
    return this.http
      .delete<any>(this.endpoint + "contacts/" + id, this.httpOptions)
      .pipe(
        tap(_ => console.log(`deleted contact id=${id}`)),
        catchError(this.handleError<any>("deleteEntry"))
      );
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
