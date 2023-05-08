import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { SignupModule } from './signup/signup.module';
import { LoginModule } from './login/login.module';

@NgModule({
  imports: [
    SignupModule,
    LoginModule,
    AuthRoutingModule,
  ],
})
export class AuthModule { }
