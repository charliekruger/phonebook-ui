import { Component, OnInit } from "@angular/core";
import { RestService } from "../../../services/rest.service";
import { ActivatedRoute, Router } from "@angular/router";
import { PhonebookEntry } from 'src/app/interfaces/phonebook-entry';

@Component({
  selector: "app-entry-detail",
  templateUrl: "./entry-detail.component.html",
  styleUrls: ["./entry-detail.component.scss"]
})
export class EntryDetailComponent implements OnInit {
  entry: PhonebookEntry;

  constructor(
    public rest: RestService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // var data = this.route.snapshot.params;
    // console.log(data);
    // this.entry = data;

    this.rest.getEntry(this.route.snapshot.params.id).subscribe(
      (data: PhonebookEntry) => {
        console.log(data);
        this.entry = data;
      }
    );
  }
}
