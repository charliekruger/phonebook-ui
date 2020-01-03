import { Component, OnInit } from "@angular/core";
import { RestService } from "../rest.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-entries",
  templateUrl: "./entries.component.html",
  styleUrls: ["./entries.component.scss"]
})
export class EntriesComponent implements OnInit {
  searchterm: "";
  entries: any = [];
  filteredEntries: any = [];

  constructor(
    public rest: RestService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.getEntries();
  }

  onKey(event: any) {
    // without type info
    this.searchterm = event.target.value;

    this.filteredEntries = this.entries.filter(it => {
      return it.name.toLowerCase().includes(this.searchterm.toLowerCase());
    });
  }

  getEntries() {
    this.entries = [];
    this.rest.getPhonebookEntries().subscribe((data: {}) => {
      console.log(data);
      this.entries = data;
      this.filteredEntries = this.entries;
    });
  }

  add() {
    this.router.navigate(["/entry-add"]);
  }

  delete(id) {
    this.rest.deleteEntry(id).subscribe(
      res => {
        this.getEntries();
      },
      err => {
        console.log(err);
      }
    );
  }
}
