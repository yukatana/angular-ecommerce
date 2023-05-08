import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { CommonModule } from '@angular/common';
import { SharedFormsModule } from '../../shared/shared-forms.module';
import { MaterialModule } from '../../shared/material.module';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    SharedFormsModule,
    MaterialModule,
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
