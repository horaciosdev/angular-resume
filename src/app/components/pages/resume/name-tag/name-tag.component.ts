import {
  Component,
  ElementRef,
  HostListener,
  Input,
  ViewChild,
} from '@angular/core';
import { Resume } from 'src/app/components/Resume';

@Component({
  selector: 'app-name-tag',
  templateUrl: './name-tag.component.html',
  styleUrls: ['./name-tag.component.scss'],
})
export class NameTagComponent {
  @Input() resume!: Resume;
  @ViewChild('nameInput') nameInput!: ElementRef;
  @ViewChild('roleInput') roleInput!: ElementRef;
  lastActiveElement!: ElementRef;

  @HostListener('document.keydown', ['$event'])
  blur(event: KeyboardEvent, element: HTMLElement) {
    if (event.key === 'Enter') {
      event.preventDefault();
      element.blur();
    }
    if (event.key === 'Escape') {
      element.innerText = this.resume.name;
      this.setCursorToEnd(element);
    }
  }

  changeValue(element: HTMLElement, variableName: 'name' | 'role'): void {
    this.resume[variableName] = element.innerText.trim();
  }

  setCursorToEnd(el: HTMLElement) {
    const range = document.createRange();
    range.selectNodeContents(el);
    range.collapse(false);
    const sel = window.getSelection()!;
    sel.removeAllRanges();
    sel.addRange(range);
  }

  setFocus(): void {
    if (this.lastActiveElement === this.nameInput.nativeElement) {
      this.lastActiveElement = this.roleInput.nativeElement;
      this.roleInput.nativeElement.focus();
      this.setCursorToEnd(this.roleInput.nativeElement);
    } else {
      this.lastActiveElement = this.nameInput.nativeElement;
      this.nameInput.nativeElement.focus();
      this.setCursorToEnd(this.nameInput.nativeElement);
    }
  }
}
