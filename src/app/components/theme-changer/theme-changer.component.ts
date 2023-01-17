import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-theme-changer',
  templateUrl: './theme-changer.component.html',
  styleUrls: ['./theme-changer.component.scss'],
})
export class ThemeChangerComponent {
  previousClass: string = '';
  themeClass: string = 'light-theme purple';

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.loadTheme();
  }

  changeTheme(newThemeClass: string): void {
    this.previousClass = this.themeClass;
    this.themeClass = newThemeClass;
    this.saveTheme(this.themeClass);
    this.setTheme();
  }

  setTheme() {
    let prevClasses = this.previousClass.split(' ');
    prevClasses.forEach((c) => {
      this.elementRef.nativeElement.ownerDocument.body.classList.remove(c);
    });
    let themeClass = this.themeClass.split(' ');
    themeClass.forEach((c) => {
      this.elementRef.nativeElement.ownerDocument.body.classList.add(c);
    });
  }

  saveTheme(newClass: string): void {
    localStorage.setItem('themeClass', newClass);
  }

  loadTheme(): void {
    let _themeClass = localStorage.getItem('themeClass');
    if (_themeClass !== null) {
      this.previousClass = this.themeClass;
      this.themeClass = _themeClass;
      this.setTheme();
    }
  }
}
