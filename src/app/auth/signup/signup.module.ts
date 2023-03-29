import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './components/signup/signup.component';
import { SharedFormsModule } from '../../shared/shared-forms.module';
import { MaterialModule } from '../../shared/material.module';



@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [
    CommonModule,
    SharedFormsModule,
    MaterialModule,
  ]
})
export class SignupModule { }
