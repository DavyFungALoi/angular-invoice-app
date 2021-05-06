import { Injectable } from '@angular/core';
import invoiceData from "../../assets/data/invoiceData.json"
import { Invoice } from "../models/invoice"


///'../../../assets/data/invoiceData.json';
@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  constructor() {}
  getInvoices() {
    return invoiceData;
  }
}
