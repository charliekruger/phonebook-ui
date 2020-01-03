import { Component, OnInit, Input } from "@angular/core";
import { RestService } from "../rest.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-entry-edit",
  templateUrl: "./entry-edit.component.html",
  styleUrls: ["./entry-edit.component.scss"]
})
export class EntryEditComponent implements OnInit {
  @Input() entryData = {
    name: "",
    surname: "",
    contactDetails: [
      {
        description: "",
        content: ""
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
      .getEntry(this.route.snapshot.params.id)
      .subscribe(
        (data: {
          name: "";
          surname: "";
          contactDetails: [
            {
              description: "";
              content: "";
            }
          ];
        }) => {
          console.log(data);
          this.entryData = data;
        }
      );
  }

  addNumber() {
    this.entryData.contactDetails.push({description: "", content: "" });
  }

  removeNumber(item) {
    const index = this.entryData.contactDetails.indexOf(item, 0);
    if (index > -1) {
      this.entryData.contactDetails.splice(index, 1);
    }
  }

  updateEntry() {
    console.log(this.entryData);
    this.rest.updateEntry(this.entryData).subscribe(
      result => {
        this.router.navigate(["/entry-detail/" + result.phonebookEntryId]);
      },
      err => {
        console.log(err);
      }
    );
  }
}
