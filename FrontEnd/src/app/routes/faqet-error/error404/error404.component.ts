import { Component, OnInit } from '@angular/core';
import { PerdoruesApi } from '../../../shared/sdk/services/custom'
@Component({
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.scss']
})
export class Error404Component implements OnInit {

  isAuthenticated: boolean = this._perdorues.isAuthenticated();

  constructor(
    private _perdorues: PerdoruesApi
  ) { }

  ngOnInit() {
  }

}
