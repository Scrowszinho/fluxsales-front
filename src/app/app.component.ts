import { Component } from '@angular/core';
import { RouteUtilsService } from './core/utils/route-utils.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor (
    public routeUtil: RouteUtilsService
  ) {}
}
