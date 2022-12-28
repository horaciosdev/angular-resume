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
  { params: { newPercent: '0%' } }
);

const fillBar = trigger('fillBar', [
  start,
  end,
  transition('start <=> end', [animate('1s')]),
]);

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss'],
  animations: [fillBar],
})

export class BarComponent {
  @Input() percent: number = 0;
  @ViewChild('bar', { static: true }) bar!: ElementRef;

  state = 'start';

  ngAfterViewInit(): void {
    this.state = 'end';
  }

  toggle() {
    this.state = this.state === 'start' ? 'end' : 'start';
  }
}
