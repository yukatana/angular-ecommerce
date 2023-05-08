import { NgModule } from '@angular/core';
import { SignupComponent } from './components/signup/signup.component';

@NgModule({
  declarations: [
    SignupComponent
  ],
  exports: [
    SignupComponent
  ]
})
export class SignupModule { }
