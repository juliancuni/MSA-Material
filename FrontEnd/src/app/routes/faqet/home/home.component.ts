import { Component, OnInit } from '@angular/core';
import { PerdoruesApi } from '../../../shared/sdk/services/custom'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private _perdorues: PerdoruesApi
  ) {
    this._perdorues.find().subscribe((res) => {
      console.log(res)
    })
  }

  ngOnInit() {
  }

}
