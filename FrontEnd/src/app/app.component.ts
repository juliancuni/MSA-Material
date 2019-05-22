import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment'
import { LoopBackConfig } from './shared/sdk/lb.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'FrontEnd';

  ngOnInit() {
    LoopBackConfig.setBaseURL(environment.API_BASE_PATH);
  }
}

