import { Component, OnInit } from '@angular/core';
import invoiceData from '../../../assets/data/invoiceData.json';
import { Invoice } from '../../models/invoice';
@Component({
  selector: 'app-invoice-overview-header',
  templateUrl: './invoice-overview-header.component.html',
  styleUrls: ['./invoice-overview-header.component.scss'],
})
export class InvoiceOverviewHeaderComponent implements OnInit {
  invoices: Invoice[];
  constructor() {}

  ngOnInit(): void {
    this.invoices = invoiceData;
  }
}
