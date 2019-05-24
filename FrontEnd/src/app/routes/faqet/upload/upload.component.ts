import { Component, OnInit, ViewChild } from '@angular/core';
import { LoopBackConfig } from '../../../shared/sdk/lb.config';
import { PerdoruesApi, FotoApi, LoopBackAuth } from 'src/app/shared/sdk';
import { DropzoneComponent, DropzoneDirective, DropzoneConfigInterface } from 'ngx-dropzone-wrapper';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
  providers: []
})
export class UploadComponent implements OnInit {

  @ViewChild(DropzoneComponent) componentRef?: DropzoneComponent;
  @ViewChild(DropzoneDirective) directiveRef?: DropzoneDirective;

  public type: string = 'component';

  public disabled: boolean = false;

  public config: DropzoneConfigInterface = {
    url: LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() + "/Fotografite/tempContainer/upload?access_token=" + this._perdorues.getCurrentToken().id,
    clickable: true,
    maxFiles: 50,
    autoReset: null,
    errorReset: null,
    cancelReset: null
  };

  constructor(
    private _perdorues: PerdoruesApi,
    private _foto: FotoApi
  ) {
    // DEFAULT_DROPZONE_CONFIG.url = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() + "/Fotografite/tempContainer/upload?access_token=" + this._perdorues.getCurrentToken().id;
  }
  public toggleType(): void {
    this.type = (this.type === 'component') ? 'directive' : 'component';
  }
  public toggleDisabled(): void {
    this.disabled = !this.disabled;
  }

  public toggleAutoReset(): void {
    this.config.autoReset = this.config.autoReset ? null : 5000;
    this.config.errorReset = this.config.errorReset ? null : 5000;
    this.config.cancelReset = this.config.cancelReset ? null : 5000;
  }

  public toggleMultiUpload(): void {
    this.config.maxFiles = this.config.maxFiles ? 0 : 1;
  }

  public toggleClickAction(): void {
    this.config.clickable = !this.config.clickable;
  }

  public resetDropzoneUploads(): void {
    if (this.type === 'directive' && this.directiveRef) {
      this.directiveRef.reset();
    } else if (this.type === 'component' && this.componentRef && this.componentRef.directiveRef) {
      this.componentRef.directiveRef.reset();
    }
  }

  public onUploadInit(args: any): void {
    console.log('onUploadInit:', args);
  }

  public onUploadError(args: any): void {
    console.log('onUploadError:', args);
  }

  public onUploadSuccess(args: any): void {
    console.log('onUploadSuccess:', args);
  }

  ngOnInit() {
  }

}
