import { Component, Input } from '@angular/core';
import { Career } from '../Resume';
@Component({
  selector: 'app-career-list',
  templateUrl: './career-list.component.html',
  styleUrls: ['./career-list.component.scss']
})
export class CareerListComponent {
  @Input() careerList: Career[] = [];
}
