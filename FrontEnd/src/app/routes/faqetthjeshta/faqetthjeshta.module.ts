import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    LoginComponent, 
    RegisterComponent, 
    DashboardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
  ]
})
export class FaqetthjeshtaModule { }
