import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceScreenComponent } from './invoice-screen.component';

describe('InvoiceScreenComponent', () => {
  let component: InvoiceScreenComponent;
  let fixture: ComponentFixture<InvoiceScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
