import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RoutesModule } from './routes/routes.module';
import { SharedModule } from './shared/shared.module';
import { LayoutModule } from './layout/layout.module';
// import { RoutesGuardModule } from './shared/routes-guard/routes-guard.module';
// import { SDKBrowserModule } from './shared/sdk/index';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    RoutesModule,
    SharedModule.forRoot(),
    LayoutModule,
    // RoutesGuardModule,
    // SDKBrowserModule.forRoot(),
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "al" }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
