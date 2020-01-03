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

  ngOnInit() {}

  addNumber() {
    this.entryData.contactDetails.push({
      description: "",
      content: ""
    });
  }

  removeNumber(item) {
    const index = this.entryData.contactDetails.indexOf(item, 0);
    if (index > -1) {
      this.entryData.contactDetails.splice(index, 1);
    }
  }

  addEntry() {
    console.log("data being saved:: " + this.entryData);
    this.rest.addEntry(this.entryData).subscribe(
      result => {
        this.router.navigate(["/entry-detail/" + result.phonebookEntryId]);
      },
      err => {
        console.log(err);
      }
    );
  }
}
