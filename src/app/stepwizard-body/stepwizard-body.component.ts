import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {  StepwizardServiceService } from '../stepwizard-service.service';

@Component({
  selector: 'app-stepwizard-body',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stepwizard-body.component.html',
  styleUrl: './stepwizard-body.component.css'
})
export class StepwizardBodyComponent {
  constructor(public readonly genservice:StepwizardServiceService) {}
  public completeStep(step: number): void {
    this.genservice.stepCompleted[step - 1] = true;
  }
}
