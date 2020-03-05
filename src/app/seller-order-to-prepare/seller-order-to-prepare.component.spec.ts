import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerOrderToPrepareComponent } from './seller-order-to-prepare.component';

describe('SellerOrderToPrepareComponent', () => {
  let component: SellerOrderToPrepareComponent;
  let fixture: ComponentFixture<SellerOrderToPrepareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerOrderToPrepareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerOrderToPrepareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
