import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceOverviewHeaderComponent } from './invoice-overview-header.component';

describe('InvoiceOverviewHeaderComponent', () => {
  let component: InvoiceOverviewHeaderComponent;
  let fixture: ComponentFixture<InvoiceOverviewHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceOverviewHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceOverviewHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
