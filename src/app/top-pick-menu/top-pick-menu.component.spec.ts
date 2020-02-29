import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopPickMenuComponent } from './top-pick-menu.component';

describe('TopPickMenuComponent', () => {
  let component: TopPickMenuComponent;
  let fixture: ComponentFixture<TopPickMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopPickMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopPickMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
