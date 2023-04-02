import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedFormsModule } from '../../shared/shared-forms.module';
import { MaterialModule } from '../../shared/material.module';
import { RouterModule } from '@angular/router';

import { SignupComponent } from './components/signup/signup.component';


@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [
    CommonModule,
    SharedFormsModule,
    MaterialModule,
    RouterModule,
  ],
  exports: [
    SignupComponent
  ]
})
export class SignupModule { }
