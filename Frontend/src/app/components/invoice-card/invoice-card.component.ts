import { Component, OnInit, Input } from '@angular/core';
import { Invoice } from '../../models/invoice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invoice-card',
  templateUrl: './invoice-card.component.html',
  styleUrls: ['./invoice-card.component.scss'],
})
export class InvoiceCardComponent implements OnInit {
  @Input() invoice: Invoice;
  constructor(private router: Router) {}
  invoiceStatusStyle = '';
  ngOnInit(): void {
    this.invoiceStatusStyle = this.invoice.status;
    console.log(this.invoice.status);
  }
  onSelect(invoice) {
    this.router.navigate(['/invoice', invoice.id]);
  }
}

// <div (click)="OnSelect({{invoice}})">Visit invoice </div>
/*
 this.router.navigate(['/invoice', invoice.id]);
*/
