import { Component, Input } from '@angular/core';
import { Resume } from '../Resume';
@Component({
  selector: 'app-career-list',
  templateUrl: './career-list.component.html',
  styleUrls: ['./career-list.component.scss'],
})
export class CareerListComponent {
  @Input() resume!: Resume;
}
