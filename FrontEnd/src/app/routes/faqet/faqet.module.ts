import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../../shared/shared.module';
import { UploadComponent } from './upload/upload.component';
import { DropzoneModule, DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { DEFAULT_DROPZONE_CONFIG } from './upload/dropzone.config'
const routes: Routes = [
  { path: '', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'upload', component: UploadComponent },
];

@NgModule({
  declarations: [HomeComponent, UploadComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    DropzoneModule
  ],
  exports: [
    RouterModule,
  ],
  providers: [
    {provide: DROPZONE_CONFIG,
    useValue: DEFAULT_DROPZONE_CONFIG}
  ]
})
export class FaqetModule { }
