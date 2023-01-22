import { Component, HostListener, Input } from '@angular/core';
import { About, Resume } from 'src/app/components/Resume';
import { ContentEditableService } from 'src/app/services/content-editable.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  @Input() resume!: Resume;

  constructor(private contentEditable: ContentEditableService) {}

  @HostListener('document.keydown', ['$event'])
  onKeyDown(event: KeyboardEvent, element: HTMLElement, variableName: string) {
    type KeyIndex = keyof About;
    const key: KeyIndex = variableName as keyof About;

    if (event.key === 'Enter') {
      event.preventDefault();
      element.blur();
    }
    if (event.key === 'Escape') {
      element.innerText = this.resume.about[key] as string;
      element.blur();
    }
  }

  onBlur(element: HTMLElement, variableName: string): void {
    type KeyIndex = keyof About;
    const key: KeyIndex = variableName as keyof About;
    this.resume.about[key] = element.innerText.trim() as never;
  }

  focusChanger(elements: HTMLElement[]): void {
    this.contentEditable.focusChanger(elements);
  }
}
