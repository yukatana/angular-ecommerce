import { NgModule } from '@angular/core';
import { MaterialModule } from '../../shared/material.module';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { FooterComponent } from '../components/footer/footer.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    NotFoundComponent,
  ]
})
export class CoreModule { }
