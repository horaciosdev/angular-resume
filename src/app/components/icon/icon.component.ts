import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { IconService } from 'src/app/services/icon.service';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent {
  @Input() iconName: string = '';

  constructor(
    private domSanitizer: DomSanitizer,
    private iconService: IconService
  ) {}

  getIcon() {
    return this.domSanitizer.bypassSecurityTrustHtml(
      this.iconService.getIcon(this.iconName)
    );
  }
}
