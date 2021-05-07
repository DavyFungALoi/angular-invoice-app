import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(public themeService: ThemeService) {}
  sum(a: number, b: number) {
    return a + b;
  }

  clickHandler(): void {
    console.log('hello');
  }

  ngOnInit(): void {}
}
