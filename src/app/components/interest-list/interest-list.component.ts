import { Component, Input } from '@angular/core';
import { Interest } from '../Resume';

@Component({
  selector: 'app-interest-list',
  templateUrl: './interest-list.component.html',
  styleUrls: ['./interest-list.component.scss']
})
export class InterestListComponent {
@Input() interests: Interest[] = [];
}
