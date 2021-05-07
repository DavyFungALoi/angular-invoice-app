import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import invoiceData from '../../../assets/data/invoiceData.json';
import { Invoice } from '../../models/invoice';

@Component({
  selector: 'app-invoice-screen',
  templateUrl: './invoice-screen.component.html',
  styleUrls: ['./invoice-screen.component.scss'],
})
export class InvoiceScreenComponent implements OnInit {
  public invoiceId;
  invoices: Invoice[];
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.invoices = invoiceData;
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    const stringId = id.toString();
    this.invoiceId = stringId;
    console.log(id)
    console.log(stringId);
    console.log(this.invoices);
    const currentInvoiceData = this.invoices.filter((invoice) => {
      return invoice.id == stringId;
    });
    console.log('test');
  }
}
