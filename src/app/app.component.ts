import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StepwizardComponent } from './stepwizard/stepwizard.component';
import { StepwizardBodyComponent } from './stepwizard-body/stepwizard-body.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,StepwizardComponent,StepwizardBodyComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'wizard';
}
