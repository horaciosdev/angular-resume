import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ICONS } from 'src/mock-icons';
import { Icon } from '../components/Icon';

@Injectable({
  providedIn: 'root',
})
export class IconService {
  getIcon(iconName: string): Observable<Icon> {
    const icon = ICONS.find((r) => r.name === iconName) || ICONS[0];
    return of(icon);
  }
}
