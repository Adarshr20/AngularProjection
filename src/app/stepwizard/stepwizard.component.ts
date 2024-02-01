import { Component } from '@angular/core';
import {  StepwizardServiceService } from '../stepwizard-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stepwizard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stepwizard.component.html',
  styleUrl: './stepwizard.component.css'
})
export class StepwizardComponent {
 
  constructor(public readonly genservice:StepwizardServiceService) {}

  public setStep(no: number): void {
    if (this.genservice.stepCompleted[no - 1] || no === this.genservice.currStep) {
      this.genservice.currStep = no;
    } else {
      alert('Complete previous steps first.');
    }
    console.log(this.genservice.stepCompleted)
  }

    public next(): void {
      let prevStepCompleted=false;
      if((this.genservice.currStep==1))
      { prevStepCompleted=true;
     
      }else{
        prevStepCompleted = this.genservice.stepCompleted[this.genservice.currStep - 2];
      }
  
      if (prevStepCompleted) {
        this.genservice.stepCompleted[this.genservice.currStep]=true;
        this.genservice.currStep += 1;

      } else {
        alert('Complete previous steps before proceeding.');
      }
    }

    public prev(){
      this.genservice.currStep-=1
    }
}
