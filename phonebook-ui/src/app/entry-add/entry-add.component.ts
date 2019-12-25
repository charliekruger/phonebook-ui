import { Component, OnInit, Input } from "@angular/core";
import { RestService } from "../rest.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-product-add",
  templateUrl: "./entry-add.component.html",
  styleUrls: ["./entry-add.component.css"]
})
export class EntryAddComponent implements OnInit {
  @Input() entryData = {
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

  ngOnInit() {}

  addEntry() {
    this.rest.addEntry(this.entryData).subscribe(
      result => {
        this.router.navigate(["/product-details/" + result._id]);
      },
      err => {
        console.log(err);
      }
    );
  }
}
