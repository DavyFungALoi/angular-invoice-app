import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private presentThemeSubject = new BehaviorSubject(
    localStorage.getItem('theme') || 'theme-light'
  );

  presentTheme$: Observable<string> = this.presentThemeSubject.asObservable();
  constructor() {}

  changeTheme(theme) {
    this.presentThemeSubject.next(theme);
    localStorage.setItem('theme', theme);
  }
}
