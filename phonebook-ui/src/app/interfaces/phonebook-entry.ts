import { ContactDetail } from "./contact-detail";

export interface PhonebookEntry {
  name: string;
  surname: string;
  contactDetails: ContactDetail[];
}
