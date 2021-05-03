import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../app/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-invoiceapp';

  constructor(public themeService: ThemeService) {}

  ngOnInit() {
    this.themeService.presentTheme$
  }
}
