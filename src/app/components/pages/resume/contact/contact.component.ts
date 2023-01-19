import { Component, Input } from '@angular/core';
import { Resume } from 'src/app/components/Resume';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  @Input() resume!: Resume;
}
