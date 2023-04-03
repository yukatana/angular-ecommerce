import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { MaterialModule } from '../../shared/material.module';
import { SharedFormsModule } from '../../shared/shared-forms.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedFormsModule,
    RouterModule,
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
