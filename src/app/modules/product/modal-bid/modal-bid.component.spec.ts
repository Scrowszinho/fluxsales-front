import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBidComponent } from './modal-bid.component';

describe('ModalBidComponent', () => {
  let component: ModalBidComponent;
  let fixture: ComponentFixture<ModalBidComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalBidComponent]
    });
    fixture = TestBed.createComponent(ModalBidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
