import { ContactDetail } from "../interfaces/contact-detail";

export class ContactDetailObject implements ContactDetail {
  description: string;
  content: string;

  constructor(description: string, content: string) {
    this.description = description;
    this.content = content;
  }
}
