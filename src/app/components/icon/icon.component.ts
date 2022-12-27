import { Component, Input } from '@angular/core';
import { IconService } from 'src/app/services/icon.service';
import { Icon } from '../Icon';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent {
  @Input() iconName: string = '';
  icon!: Icon;

  constructor(private iconService: IconService) {}

  ngOnInit(): void {
    this.getIcon();
  }

  getIcon() {
    return this.iconService
      .getIcon(this.iconName)
      .subscribe((icon) => (this.icon = icon));
  }
}
