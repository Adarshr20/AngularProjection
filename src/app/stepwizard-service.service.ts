import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StepwizardServiceService {

  constructor() { }
  public currStep:number=1;
}


