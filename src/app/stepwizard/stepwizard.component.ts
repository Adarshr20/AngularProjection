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

    public setStep(no:number):void{
   
      this.genservice.currStep=no;
   
    }

    public next(){
      this.genservice.currStep+=1
    }

    public prev(){
      this.genservice.currStep-=1
    }
}
