import { Component, OnInit } from '@angular/core';
import { Invoice } from '../../models/invoice';
import { InvoiceService } from '../../services/invoice.service';

@Component({
  selector: 'app-invoice-overview-screen',
  templateUrl: './invoice-overview-screen.component.html',
  styleUrls: ['./invoice-overview-screen.component.scss'],
})
export class InvoiceOverviewScreenComponent implements OnInit {
  invoices: Invoice[];
  constructor(private invoiceService: InvoiceService) {}

  ngOnInit(): void {
    this.invoices = this.invoiceService.getInvoices();
  }
}
