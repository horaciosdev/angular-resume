import { Component, Input } from '@angular/core';
import { Skill } from '../Resume';
@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.scss'],
})
export class SkillListComponent {
  @Input() skillList: Skill[] = [];
}
