import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { InvoiceOverviewScreenComponent } from './Screens/invoice-overview-screen/invoice-overview-screen.component';
import { InvoiceOverviewHeaderComponent } from './components/invoice-overview-header/invoice-overview-header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InvoiceOverviewScreenComponent,
    InvoiceOverviewHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
