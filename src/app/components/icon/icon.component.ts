import { Component, ElementRef, Input } from '@angular/core';
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

  constructor(
    private iconService: IconService,
    private elementRef: ElementRef
  ) {}

  ngOnInit(): void {
    this.getIcon();
  }

  ngAfterViewInit() {
    const tmpContainer = document.createElement('div');
    tmpContainer.innerHTML = this.icon.svg;
    const svgr = tmpContainer.querySelector('svg');
    var svg = this.elementRef.nativeElement.querySelector('.icon');

    svg.innerHTML = svgr?.innerHTML;
    svg.setAttribute('viewBox', svgr!.getAttribute('viewBox'));
    svg.setAttribute('fill', svgr!.getAttribute('fill'));
    svg.setAttribute('stroke', svgr!.getAttribute('stroke'));
    svg.setAttribute('width', svgr!.getAttribute('width'));
    svg.setAttribute('height', svgr!.getAttribute('height'));
    svg.setAttribute('xmlns', svgr!.getAttribute('xmlns'));
  }

  getIcon(): void {
    this.iconService
      .getIcon(this.iconName)
      .subscribe((icon) => (this.icon = icon));
  }
}
