import { Component, Input } from '@angular/core';
import { Resume } from '../Resume';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Input() resume!: Resume;
}
