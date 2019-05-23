import { LayoutComponent } from '../layout/layout/layout.component';
import { LoginComponent } from './faqetthjeshta/login/login.component';
import { RegisterComponent } from './faqetthjeshta/register/register.component';
import { Error404Component } from './faqet-error/error404/error404.component';

import { AuthGuard } from '../shared/routes-guard/guards/auth.guard';
import { UnauthGuard } from '../shared/routes-guard/guards/unauth.guard';

export const routes = [
    {
        path: '',
        component: LayoutComponent,
        canActivate: [AuthGuard],
        children: [
            { path: '', redirectTo: '/main/home', pathMatch: 'full' },
            { path: 'main', loadChildren: './faqet/faqet.module#FaqetModule' },
        ]
    },
    { path: 'login', component: LoginComponent, canActivate: [UnauthGuard] },
    { path: 'register', component: RegisterComponent, canActivate: [] },
    { path: '404', component: Error404Component },
    { path: '**', redirectTo: '404' }
];