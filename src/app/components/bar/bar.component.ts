import { Component, Input, ElementRef, ViewChild } from '@angular/core';
import {
  state,
  trigger,
  transition,
  style,
  animate,
} from '@angular/animations';

const start = state(
  'start',
  style({
    width: '0%',
  })
);

const end = state(
  'end',
  style({
    width: '{{newPercent}}%',
  }),
  { params: { newPercent: '0%', duration: '1' } }
 );
 

const fillBar = trigger('fillBar', [
  start,
  end,
  transition('start <=> end', [animate('{{duration}}s ease')]),
]);

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss'],
  animations: [fillBar],
})
export class BarComponent {
  @Input() percent: number = 0;
  @Input() duration: number = 1;

  state = 'start';

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.state = 'end';
    }, 0);
  }
}
