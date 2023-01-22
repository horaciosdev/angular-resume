import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContentEditableService {
  focusIndex: number = 0;

  constructor() {}

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

  setCursorToEnd(el: HTMLElement) {
    const range = document.createRange();
    range.selectNodeContents(el);
    range.collapse(false);
    const sel = window.getSelection()!;
    sel.removeAllRanges();
    sel.addRange(range);
  }
}
