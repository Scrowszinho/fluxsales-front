import { Component, ViewChildren } from '@angular/core';
import { RouteUtilsService } from './core/utils/route-utils.service';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChildren('header') header!: HeaderComponent;

  constructor (
    public routeUtil: RouteUtilsService
  ) {}

  closeMenu(): void {
    this.header.shouldOpenDetails = false;
  }
}
