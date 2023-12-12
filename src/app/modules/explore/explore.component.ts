import { Component } from '@angular/core';
import { ExploreService } from './explore.service';
import { IExploreOffers } from './interfaces/explore.interfaces';
import { SnackBarService } from 'src/app/components/snackbar/snackbar.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent {

  offers: IExploreOffers[] = [];

  constructor(
    private _service: ExploreService,
    private _snackBar: SnackBarService
   ) {

  }

  ngOnInit() {
    this.getOffers();
  }

  getOffers(): void {
    this._service.getOffers().subscribe({
      next: res => {
        this.offers = res.data;
      },
      error: error => {
        this._snackBar.open(error.error.message, 'Ok')  
      }
    })
  }
}
