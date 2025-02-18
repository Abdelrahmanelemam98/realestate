import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelSpaceComponent } from './model-space.component';

describe('ModelSpaceComponent', () => {
  let component: ModelSpaceComponent;
  let fixture: ComponentFixture<ModelSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelSpaceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModelSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
