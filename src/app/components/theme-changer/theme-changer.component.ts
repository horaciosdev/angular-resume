import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-theme-changer',
  templateUrl: './theme-changer.component.html',
  styleUrls: ['./theme-changer.component.scss'],
})
export class ThemeChangerComponent {
  themeClass: string = 'light-theme purple';

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.loadTheme();
  }

  changeTheme(newThemeClass: string): void {
    this.themeClass = newThemeClass;
    this.saveTheme(this.themeClass);
    this.setTheme();
  }

  setTheme() {
    this.elementRef.nativeElement.ownerDocument.body.className =
      this.themeClass;
  }

  saveTheme(newClass: string): void {
    localStorage.setItem('themeClass', newClass);
  }

  loadTheme(): void {
    let _themeClass = localStorage.getItem('themeClass');
    if (_themeClass !== null) {
      this.themeClass = _themeClass;
      this.setTheme();
    }
  }
}
