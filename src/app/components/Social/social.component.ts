import { Component, Input } from '@angular/core';
import { Resume, Follow } from '../Resume';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss'],
})
export class SocialComponent {
  @Input() resume!: Resume;
}
