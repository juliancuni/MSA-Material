import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { FaqetthjeshtaModule } from './faqetthjeshta/faqetthjeshta.module';
import { FaqetErrorModule } from './faqet-error/faqet-error.module';

import { routes } from './routes';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot(routes),
    FaqetthjeshtaModule,
    FaqetErrorModule
  ],
  exports: [
    RouterModule
  ]
})
export class RoutesModule { }
