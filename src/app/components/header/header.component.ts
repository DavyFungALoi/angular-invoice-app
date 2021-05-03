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

  themeHandler() : void {
    console.log("theme")
  }

  clickHandler(): void {
    console.log('hello');
  }

  ngOnInit(): void {}
}
