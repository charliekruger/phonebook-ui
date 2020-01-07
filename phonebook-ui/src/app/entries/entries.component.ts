import { Component, OnInit } from "@angular/core";
import { RestService } from "../rest.service";
import { ActivatedRoute, Router } from "@angular/router";
import { MatDialog, MatDialogConfig } from "@angular/material";
import { ConfirmDialogComponent } from "../confirm-dialog/confirm-dialog.component";

@Component({
  selector: "app-entries",
  templateUrl: "./entries.component.html",
  styleUrls: ["./entries.component.scss"]
})
export class EntriesComponent implements OnInit {
  searchterm: "";
  entries: any = [];
  filteredEntries: any = [];
  shouldDelete: boolean = false;

  constructor(
    public rest: RestService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getEntries();
  }

  onKey(event: any) {
    // without type info
    this.searchterm = event.target.value;

    this.filteredEntries = this.entries.filter(it => {
      var fullName = it.name + " " + it.surname;

      return fullName.toLowerCase().includes(this.searchterm.toLowerCase());
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

  showDeleteDialog(entry) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      title: "Delete Contact",
      description:
        "Are you sure you want to delete " +
        entry.name +
        " " +
        entry.surname +
        "?"
    };

    const dialogRef = this.dialog.open(ConfirmDialogComponent, dialogConfig);

    dialogRef
      .afterClosed()
      .subscribe(data =>
        this.handleDeleteDialogResult(data, entry.phonebookEntryId)
      );
  }

  handleDeleteDialogResult(data, id) {
    if (data != null) {
      if (data === true) {
        this.delete(id);
      }
    }
  }
}
