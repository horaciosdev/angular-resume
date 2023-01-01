import { Component, Input } from '@angular/core';
import { Resume } from '../Resume';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent {
  @Input() resume!: Resume;
}
