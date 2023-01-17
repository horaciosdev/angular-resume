import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-resume',
  templateUrl: './new-resume.component.html',
  styleUrls: ['./new-resume.component.scss'],
})
export class NewResumeComponent {
  image = new FormControl('');
  name = new FormControl('');
}
