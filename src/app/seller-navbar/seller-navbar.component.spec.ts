import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerNavbarComponent } from './seller-navbar.component';

describe('SellerNavbarComponent', () => {
  let component: SellerNavbarComponent;
  let fixture: ComponentFixture<SellerNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
