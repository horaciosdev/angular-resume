import { Component, Input } from '@angular/core';
import { Resume } from '../Resume';

@Component({
  selector: 'app-programming-skills',
  templateUrl: './programming-skills.component.html',
  styleUrls: ['./programming-skills.component.scss'],
})
export class ProgrammingSkillsComponent {
  @Input() resume!: Resume;
}
