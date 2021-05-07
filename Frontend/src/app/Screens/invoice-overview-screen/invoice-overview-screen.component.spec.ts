import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceOverviewScreenComponent } from './invoice-overview-screen.component';

describe('InvoiceOverviewScreenComponent', () => {
  let component: InvoiceOverviewScreenComponent;
  let fixture: ComponentFixture<InvoiceOverviewScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceOverviewScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceOverviewScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
