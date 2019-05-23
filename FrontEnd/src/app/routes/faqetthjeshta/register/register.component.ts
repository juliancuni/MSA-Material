import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Perdorues } from '../../../shared/sdk/models';
import { PerdoruesApi } from '../../../shared/sdk/services/custom';
import { PerdoruesFormModel } from 'src/app/shared/FormInterfaces';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  loading: Boolean = false;
  loginErrs: String;
  newPerdorues: Perdorues = new Perdorues;
  
  regForm: FormGroup = new FormGroup({});
  regFormModel: PerdoruesFormModel = new PerdoruesFormModel();
  regFormFields: Array<FormlyFieldConfig> = this.regFormModel.formFields();

  constructor(
    private _perdorues: PerdoruesApi,
    private _router: Router
  ) {
    //Constructor execute here
   }

  regPerdorues(newPerdorues: Perdorues): void {
    if (this.regForm.valid) {
      this.loading = true;
      this.loginErrs = "";
      this.newPerdorues = newPerdorues;
      let password = newPerdorues.password["password"];
      this.newPerdorues.password =  password;
      console.log(this.newPerdorues)
      this._perdorues.create(newPerdorues).subscribe((res: Perdorues) => {

      }, (err) => {
        console.log("ERR LOGIN: ", err)
        this.loginErrs = err.message || err;
        this.loading = false;
      }, () => {
        this._router.navigate(["/login"])
        this.loading = false;
      })
    }
  }

  ngOnInit() {
  }

}
