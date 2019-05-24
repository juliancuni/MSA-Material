import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { LoopBackConfig } from '../../../shared/sdk/lb.config';

export const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
    url: "",
    maxFilesize: 50,
    acceptedFiles: 'image/*'
};