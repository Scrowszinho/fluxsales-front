import { Component } from '@angular/core';
import { ExploreService } from './explore.service';
import { IExploreOffers } from './interfaces/explore.interfaces';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent {

  offers: IExploreOffers[] = [];

  constructor(
    private _service: ExploreService
   ) {

  }

  ngOnInit() {
    this.getOffers();
  }

  getOffers(): void {
    this._service.getOffers().subscribe({
      next: res => {
        this.offers = res;
      },
      error: error => {
        console.log(error);
        
      }
    })
  }
}
