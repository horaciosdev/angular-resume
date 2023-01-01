import { Component, Input } from '@angular/core';
import { Resume } from '../Resume';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  @Input() resume!: Resume;
}
