import { Component, OnInit } from '@angular/core';
import invoiceData from '../../../assets/data/invoiceData.json';
import { Invoice } from '../../models/invoice';

@Component({
  selector: 'app-invoice-overview-screen',
  templateUrl: './invoice-overview-screen.component.html',
  styleUrls: ['./invoice-overview-screen.component.scss'],
})
export class InvoiceOverviewScreenComponent implements OnInit {
  invoices: Invoice[];
  constructor() {}

  ngOnInit(): void {
    this.invoices = invoiceData;
  }
}
