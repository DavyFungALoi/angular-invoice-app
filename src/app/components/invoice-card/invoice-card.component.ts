import { Component, OnInit, Input } from '@angular/core';
import { Invoice } from '../../models/invoice';

@Component({
  selector: 'app-invoice-card',
  templateUrl: './invoice-card.component.html',
  styleUrls: ['./invoice-card.component.scss'],
})
export class InvoiceCardComponent implements OnInit {
  @Input() invoice: Invoice;
  constructor() {}
  invoiceStatusStyle = '';
  ngOnInit(): void {
    this.invoiceStatusStyle = this.invoice.status;
    console.log(this.invoice.status);
  }
}
