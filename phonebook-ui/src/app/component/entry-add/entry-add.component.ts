import { Component, OnInit, Input } from "@angular/core";
import { RestService } from "../../../services/rest.service";
import { ActivatedRoute, Router } from "@angular/router";
import { MatDialog, MatDialogConfig } from "@angular/material";
import { ConfirmDialogComponent } from "../dialogs/confirm-dialog/confirm-dialog.component";
import { WarningDialogComponent } from "../dialogs/warning-dialog/warning-dialog.component";
import { PhonebookEntryObject } from "../../dto/PhonebookEntryObject";
import { ContactDetailObject } from "src/app/dto/ContactDetailObject";

@Component({
  selector: "app-product-add",
  templateUrl: "./entry-add.component.html",
  styleUrls: ["./entry-add.component.scss"]
})
export class EntryAddComponent implements OnInit {
  valid: boolean;

  @Input() entryData = new PhonebookEntryObject("", "", [
    new ContactDetailObject("", "")
  ]);

  constructor(
    public rest: RestService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit() {}

  addNumber() {
    this.entryData.contactDetails.push(new ContactDetailObject("", ""));
  }

  removeNumber(item) {
    const index = this.entryData.contactDetails.indexOf(item, 0);
    if (index > -1) {
      this.entryData.contactDetails.splice(index, 1);
    }
  }

  addEntry() {
    this.validate();

    if (!this.valid) {
      this.showWarningDialog();
    } else {
      console.log("data being saved:: " + this.entryData);
      this.rest.addEntry(this.entryData).subscribe(
        result => {
          this.router.navigate(["/entries"]);
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
