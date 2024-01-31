import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepwizardBodyComponent } from './stepwizard-body.component';

describe('StepwizardBodyComponent', () => {
  let component: StepwizardBodyComponent;
  let fixture: ComponentFixture<StepwizardBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepwizardBodyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StepwizardBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
