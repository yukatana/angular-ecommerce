import { NgModule } from '@angular/core';
import { SignupComponent } from './components/signup/signup.component';
import { CommonModule } from '@angular/common';
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
  ],
  exports: [
    SignupComponent
  ]
})
export class SignupModule { }
