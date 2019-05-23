import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PerdoruesApi } from '../../shared/sdk/services/custom';
import { Perdorues } from '../../shared/sdk/models';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {


  isHandset$: Observable<boolean> = this._breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );


  private kyPerdorues: Perdorues = this._perdorues.getCachedCurrent();

  constructor(
    private _perdorues: PerdoruesApi,
    private _router: Router,
    private _breakpointObserver: BreakpointObserver
  ) { }

  logout() {
    this._perdorues.logout().subscribe(() => {

    }, (err) => {

    }, () => {
      this._router.navigate(["/login"])
    })
  }

  ngOnInit() {
  }

}
