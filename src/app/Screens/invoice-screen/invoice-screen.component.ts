import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-invoice-screen',
  templateUrl: './invoice-screen.component.html',
  styleUrls: ['./invoice-screen.component.scss']
})
export class InvoiceScreenComponent implements OnInit {
  public invoiceId
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id'))
    this.invoiceId=id
  }

}
