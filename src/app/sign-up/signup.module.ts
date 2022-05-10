import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatListModule} from '@angular/material/list'; 
import { SignUpComponent } from './sign-up.component';
import {MatInputModule} from '@angular/material/input';
import {  ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {AngularFormsInputMasksModule} from 'angular-forms-input-masks';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatProgressBarModule} from '@angular/material/progress-bar';

import {MatDatepickerModule} from '@angular/material/datepicker';






@NgModule({
  declarations: [SignUpComponent],
  imports: [
    CommonModule,
    MatProgressBarModule,
    MatListModule,
    MatInputModule,
    
    
    
    ReactiveFormsModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule,
    AngularFormsInputMasksModule,
   


    
    MatDatepickerModule

  ],
 

})
export class SignupModule { }
