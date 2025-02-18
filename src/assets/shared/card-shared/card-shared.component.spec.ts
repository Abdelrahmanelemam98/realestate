import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSharedComponent } from './card-shared.component';

describe('CardSharedComponent', () => {
  let component: CardSharedComponent;
  let fixture: ComponentFixture<CardSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardSharedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
