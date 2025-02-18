import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeInquiryComponent } from './make-inquiry.component';

describe('MakeInquiryComponent', () => {
  let component: MakeInquiryComponent;
  let fixture: ComponentFixture<MakeInquiryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MakeInquiryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MakeInquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
