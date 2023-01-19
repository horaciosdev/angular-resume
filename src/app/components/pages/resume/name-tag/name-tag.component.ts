import { Component, Input } from '@angular/core';
import { Resume } from 'src/app/components/Resume';

@Component({
  selector: 'app-name-tag',
  templateUrl: './name-tag.component.html',
  styleUrls: ['./name-tag.component.scss'],
})
export class NameTagComponent {
  @Input() resume!: Resume;
}
