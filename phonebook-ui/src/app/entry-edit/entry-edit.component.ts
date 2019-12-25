import { Component, OnInit, Input } from "@angular/core";
import { RestService } from "../rest.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-entry-edit",
  templateUrl: "./entry-edit.component.html",
  styleUrls: ["./entry-edit.component.css"]
})
export class EntryEditComponent implements OnInit {
  @Input() entryData: any = {
    phonebookEntryId: 0,
    name: "string",
    surname: "string",
    contactDetails: [
      {
        contactDetailId: 0,
        phonebookEntryId: 0,
        type: 0,
        description: "string",
        content: "string"
      }
    ]
  };

  constructor(
    public rest: RestService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.rest
      .getEntry(this.route.snapshot.params["phonebookEntryId"])
      .subscribe((data: {}) => {
        console.log(data);
        this.entryData = data;
      });
  }

  updateEntry() {
    this.rest
      .updateEntry(this.entryData)
      .subscribe(
        result => {
          this.router.navigate(["/product-details/" + result._id]);
        },
        err => {
          console.log(err);
        }
      );
  }
}
