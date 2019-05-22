import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { LayoutComponent } from '../layout/layout/layout.component';
import { AuthGuard } from '../shared/routes-guard/guards/auth.guard';
import { UnauthGuard } from '../shared/routes-guard/guards/unauth.guard';

export const routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [
      AuthGuard
    ],
    children: [
      { path: '', loadChildren: './faqet/faqet.module#FaqetModule' },
    ]
  },
  {
    path: '',
    canActivate: [
      UnauthGuard
    ],
    children: [
      { path: '', loadChildren: './faqetthjeshta/faqetthjeshta.module#FaqetthjeshtaModule' },
    ]
  },
  {
    path: '',
    children: [
      { path: '', loadChildren: './faqet-error/faqet-error.module#FaqetErrorModule' },
    ]
  },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class RoutesModule { }
