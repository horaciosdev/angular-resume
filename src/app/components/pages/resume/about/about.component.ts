import { Component, Input } from '@angular/core';
import { Resume } from 'src/app/components/Resume';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  @Input() resume!: Resume;
}
