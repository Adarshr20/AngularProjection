import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepwizardComponent } from './stepwizard.component';

describe('StepwizardComponent', () => {
  let component: StepwizardComponent;
  let fixture: ComponentFixture<StepwizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepwizardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StepwizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
