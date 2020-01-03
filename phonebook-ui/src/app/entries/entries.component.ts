import { Component, OnInit } from "@angular/core";
import { RestService } from "../rest.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-entries",
  templateUrl: "./entries.component.html",
  styleUrls: ["./entries.component.css"]
})
export class EntriesComponent implements OnInit {
  entries: any = [];

  constructor(
    public rest: RestService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.getEntries();
  }

  getEntries() {
    this.entries = [];
    this.rest.getPhonebookEntries().subscribe((data: {}) => {
      console.log(data);
      this.entries = data;
    });
  }

  add() {
    this.router.navigate(['/entry-add']);
  }

  delete(id) {
    this.rest.deleteEntry(id)
      .subscribe(res => {
          this.getEntries();
        }, (err) => {
          console.log(err);
        }
      );
  }
}
