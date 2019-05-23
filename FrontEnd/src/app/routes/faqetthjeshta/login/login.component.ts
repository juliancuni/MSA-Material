import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Router } from '@angular/router';
import { PerdoruesApi } from '../../../shared/sdk/services/custom';
import { LoginFormModel } from '../../../shared/FormInterfaces'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  loading: Boolean = false;
  loginErrs: String;
  credentials = {};

  loginForm: FormGroup = new FormGroup({});;
  loginFormModel: LoginFormModel = new LoginFormModel();;
  loginFormFields: Array<FormlyFieldConfig> = this.loginFormModel.formFields();;

  constructor(
    private _perdorues: PerdoruesApi,
    private _router: Router
  ) {
    //Constructor execute here
  }

  login(credentials): void {
    if (this.loginForm.valid) {
      if (this._perdorues.isAuthenticated()) {
        this._router.navigate(['/asdasd'])
        console.log("isAuthenticated(): ", this._perdorues.isAuthenticated())
      } else {
        this.loading = true;
        this.loginErrs = "";
        this._perdorues.login(credentials).subscribe(() => {

        }, (err) => {
          console.log("ERR LOGIN: ", err)
          this.loginErrs = err.message || err;
          this.loading = false;
        }, () => {
          this._router.navigate(['/main']);
        })
      }
    }

  }

  ngOnInit() {
  }
  ngOnDestroy() {
    this.loading = false;
  }
}
