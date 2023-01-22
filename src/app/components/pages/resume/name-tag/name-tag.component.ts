import { Component, HostListener, Input } from '@angular/core';
import { Resume } from 'src/app/components/Resume';

@Component({
  selector: 'app-name-tag',
  templateUrl: './name-tag.component.html',
  styleUrls: ['./name-tag.component.scss'],
})
export class NameTagComponent {
  @Input() resume!: Resume;
  focusIndex: number = 0;

  @HostListener('document.keydown', ['$event'])
  blur(event: KeyboardEvent, element: HTMLElement, variableName: string) {
    type KeyIndex = keyof Resume;
    let key: KeyIndex = variableName as keyof Resume;

    if (event.key === 'Enter') {
      event.preventDefault();
      element.blur();
    }
    if (event.key === 'Escape') {
      element.innerText = this.resume[key] as string;
      this.setCursorToEnd(element);
    }
  }

  onBlur(element: HTMLElement, variableName: string): void {
    type KeyIndex = keyof Resume;
    let key: KeyIndex = variableName as keyof Resume;

    this.resume[key] = element.innerText.trim() as never;
  }

  setCursorToEnd(el: HTMLElement) {
    const range = document.createRange();
    range.selectNodeContents(el);
    range.collapse(false);
    const sel = window.getSelection()!;
    sel.removeAllRanges();
    sel.addRange(range);
  }

  focusChanger(elements: HTMLElement[]): void {
    if (elements.length) {
      if (elements.length == this.focusIndex) {
        this.focusIndex = 0;
      }

      const element = elements[this.focusIndex];
      element.focus();
      this.setCursorToEnd(element);
      this.focusIndex++;
    }
  }
}
