import { Component, HostListener, Input } from '@angular/core';
import { Resume } from 'src/app/components/Resume';
import { ContentEditableService } from 'src/app/services/content-editable.service';

@Component({
  selector: 'app-name-tag',
  templateUrl: './name-tag.component.html',
  styleUrls: ['./name-tag.component.scss'],
})
export class NameTagComponent {
  @Input() resume!: Resume;

  constructor(private contentEditable: ContentEditableService) {}

  @HostListener('document.keydown', ['$event'])
  onKeyDown(event: KeyboardEvent, element: HTMLElement, variableName: string) {
    type KeyIndex = keyof Resume;
    const key: KeyIndex = variableName as keyof Resume;

    if (event.key === 'Enter') {
      event.preventDefault();
      element.blur();
    }
    if (event.key === 'Escape') {
      element.innerText = this.resume[key] as string;
      element.blur();
    }
  }

  onBlur(element: HTMLElement, variableName: string): void {
    type KeyIndex = keyof Resume;
    const key: KeyIndex = variableName as keyof Resume;
    this.resume[key] = element.innerText.trim() as never;
  }

  focusChanger(elements: HTMLElement[]): void {
    this.contentEditable.focusChanger(elements);
  }
}
