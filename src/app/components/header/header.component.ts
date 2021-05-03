import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  sum(a: number, b: number) {
    return a + b;
  }

  themeHandler(): void {
    console.log('theme');
  }

  clickHandler(): void {
    console.log('hello');
  }

  ngOnInit(): void {}
}

/*
 <button
      *ngIf="
        (themeService.presentTheme$ | async) == 'theme-light';
        else moonTemplate"
      (click)="themeService.changeTheme('theme-dark')"
    >
      <img src="assets/icons/sunny.svg" alt="light mode" />
    </button>
    <ng-template #moonTemplate>
      <!--   dark theme icon -->
      <button
        (click)="themeService.changeTheme('theme-light')"
      >
        <img src="assets/icons/moon.svg" alt="dark mode" />
      </button>
    </ng-template>




    [class]="themeService.presentTheme$ | async">
*/
