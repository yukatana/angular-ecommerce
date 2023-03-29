import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './components/signup/signup.component';
import { SharedFormsModule } from '../../shared/shared-forms.module';



@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [
    CommonModule,
    SharedFormsModule,
  ]
})
export class SignupModule { }
