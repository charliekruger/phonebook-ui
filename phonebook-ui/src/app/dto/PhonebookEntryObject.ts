import { PhonebookEntry } from '../interfaces/phonebook-entry';
import { ContactDetail } from '../interfaces/contact-detail';

export class PhonebookEntryObject implements PhonebookEntry {
  name: string;
  surname: string;
  contactDetails: ContactDetail[];

  constructor(name: string, surname: string, contactDetails: ContactDetail[]) {
    this.name = name;
    this.surname = surname;
    this.contactDetails = contactDetails;
  }
}
