import { Component, OnInit, Input } from "@angular/core";
import { RestService } from "../../../services/rest.service";
import { ActivatedRoute, Router } from "@angular/router";
import { MatDialog, MatDialogConfig } from "@angular/material";
import { ConfirmDialogComponent } from "../dialogs/confirm-dialog/confirm-dialog.component";
import { WarningDialogComponent } from "../dialogs/warning-dialog/warning-dialog.component";

@Component({
  selector: "app-entry-edit",
  templateUrl: "./entry-edit.component.html",
  styleUrls: ["./entry-edit.component.scss"]
})
export class EntryEditComponent implements OnInit {
  valid: boolean;

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
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
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
        this.entryData = data;
      }
    );
  }

  addNumber() {
    this.entryData.contactDetails.push({ description: "", content: "" });
  }

  removeNumber(item) {
    const index = this.entryData.contactDetails.indexOf(item, 0);
    if (index > -1) {
      this.entryData.contactDetails.splice(index, 1);
    }
  }

  updateEntry() {
    this.validate();

    if (!this.valid) {
      this.showWarningDialog();
    } else {
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

  showDeleteDialog(item) {
    if (item.description === "" && item.content === "") {
      this.removeNumber(item);
    } else {
      const dialogConfig = new MatDialogConfig();

      dialogConfig.autoFocus = true;
      dialogConfig.data = {
        title: "Remove contact detail",
        description: "Are you sure you want remove to this contact detail?"
      };

      const dialogRef = this.dialog.open(ConfirmDialogComponent, dialogConfig);

      dialogRef
        .afterClosed()
        .subscribe(data => this.handleDeleteDialogResult(data, item));
    }
  }

  handleDeleteDialogResult(data, item) {
    if (data != null) {
      if (data === true) {
        this.removeNumber(item);
      }
    }
  }

  validate() {
    this.valid = true;

    if (!this.entryData.name.length) {
      this.valid = false;
    }

    this.entryData.contactDetails.forEach(element => {
      if (!element.content.length || !element.description.length) {
        this.valid = false;
        return;
      }
    });
  }

  showWarningDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      title: "Not completed",
      description: "Please check that all fields have been completed"
    };

    const dialogRef = this.dialog.open(WarningDialogComponent, dialogConfig);
  }
}
