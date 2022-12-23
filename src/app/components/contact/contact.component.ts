import { Component } from '@angular/core';
import { Resume, Contact } from '../Resume';
import { SharedResumeService } from 'src/app/services/shared-resume.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  contacts!: Contact[];

  constructor(private sharedResumeService: SharedResumeService) {}

  ngOnInit(): void {
    let resume: Resume = this.sharedResumeService.getResume();
    this.contacts = resume.contacts;
  }
}
