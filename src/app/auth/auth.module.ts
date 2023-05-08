import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedFormsModule } from '../shared/shared-forms.module';
import { MaterialModule } from '../shared/material.module';
import { RouterModule } from '@angular/router';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthenticationService } from './services/authentication.service';

@NgModule({
  providers: [
    AuthenticationService,
  ],
  imports: [
    CommonModule,
    SharedFormsModule,
    MaterialModule,
    RouterModule,
    AuthRoutingModule,
  ],
})
export class AuthModule { }
