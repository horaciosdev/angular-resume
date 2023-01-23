import { Component, HostListener, Input } from '@angular/core';
import { ContentEditableService } from 'src/app/services/content-editable.service';
import { Resume, Social } from '../../../Resume';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss'],
})
export class SocialComponent {
  @Input() resume!: Resume;

  constructor(private contentEditable: ContentEditableService) {}

  @HostListener('document.keydown', ['$event'])
  onKeyDown(event: KeyboardEvent, element: HTMLElement, variableName: string) {
    type KeyIndex = keyof Social;
    const key: KeyIndex = variableName as keyof Social;

    if (event.key === 'Enter') {
      event.preventDefault();
      element.blur();
    }
    if (event.key === 'Escape') {
      element.innerText = this.resume.social[key] as string;
      element.blur();
    }
  }

  onBlur(element: HTMLElement, variableName: string): void {
    type KeyIndex = keyof Social;
    const key: KeyIndex = variableName as keyof Social;
    this.resume.social[key] = element.innerText.trim() as never;

    console.log(this.resume);
  }

  focusChanger(elements: HTMLElement[]): void {
    this.contentEditable.focusChanger(elements);
  }
}
