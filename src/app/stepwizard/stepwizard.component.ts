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
  public expanded:boolean=true;

  constructor(public readonly commonservice:StepwizardServiceService) {}

    public setStep(no:number):void{
      console.log("sd")
      this.commonservice.currStep=no;
   
    }

    public next(){
      this.commonservice.currStep+=1
    }

    public prev(){
      this.commonservice.currStep-=1
    }
}
