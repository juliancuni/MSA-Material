import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PerdoruesApi} from '../../shared/sdk/services/custom';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(
    private _perdorues: PerdoruesApi,
    private _router: Router
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
