import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyHomeListComponent } from './property-home-list.component';

describe('PropertyHomeListComponent', () => {
  let component: PropertyHomeListComponent;
  let fixture: ComponentFixture<PropertyHomeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertyHomeListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PropertyHomeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
