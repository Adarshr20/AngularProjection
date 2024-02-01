import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class StepwizardServiceService {
  public currStep: number = 1;
  public stepCompleted: boolean[] = [true, false, false, false];
}

