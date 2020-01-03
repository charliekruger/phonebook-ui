import { Component, OnInit } from "@angular/core";
import { RestService } from "../rest.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-entry-detail",
  templateUrl: "./entry-detail.component.html",
  styleUrls: ["./entry-detail.component.scss"]
})
export class EntryDetailComponent implements OnInit {
  entry: {
    name: "";
    surname: "";
    contactDetails: [
      {
        description: "";
        content: "";
      }
    ];
  };

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
        this.entry = data;
      }
    );
  }
}
