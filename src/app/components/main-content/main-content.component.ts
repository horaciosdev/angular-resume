import { Component, Input } from '@angular/core';
import { Resume } from '../Resume';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent {
  @Input() resume!: Resume;
}
