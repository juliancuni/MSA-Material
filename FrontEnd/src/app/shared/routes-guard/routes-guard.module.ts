import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthGuard } from './guards/auth.guard';
import { UnauthGuard } from './guards/unauth.guard';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ], 
  providers: [
    AuthGuard,
    UnauthGuard
  ]
})
export class RoutesGuardModule { }
