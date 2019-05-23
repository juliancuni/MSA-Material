import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error404Component } from './error404/error404.component';
import { Error500Component } from './error500/error500.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [Error404Component, Error500Component],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
  ]
})
export class FaqetErrorModule { }
