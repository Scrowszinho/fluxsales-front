import { Component } from '@angular/core';
import { ExploreService } from './explore.service';
import {
  ExploreFilter,
  IExploreFilter,
  IExploreOffers,
} from './interfaces/explore.interfaces';
import { SnackBarService } from 'src/app/components/snackbar/snackbar.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss'],
})
export class ExploreComponent {
  offers: IExploreOffers[] = [];
  filterDate = 0;
  filters: IExploreFilter = new ExploreFilter();

  constructor(
    private _service: ExploreService,
    private _snackBar: SnackBarService
  ) {}

  ngOnInit() {
    this.getOffers();
  }

  getFilterIcon(): string {
    if (this.filterDate == 0) return 'swap_vert';
    return 'arrow_drop_down';
  }

  activeFilter(key: string): void {
    this.filters[key] = !this.filters[key];
  }

  changeDate(): void {
    this.filterDate++;

    if (this.filterDate === 1) {
      this.filters.date = 'desc';
    } else if (this.filterDate === 2) {
      this.filters.date = 'asc';
    } else if (this.filterDate > 2) {
      this.filters.date = '';
      this.filterDate = 0;
    }
  }

  getOffers(): void {
    this._service.getOffers().subscribe({
      next: (res) => {
        this.offers = res.data;
      },
      error: (error) => {
        this._snackBar.open(error.error.message, 'Ok');
      },
    });
  }
}
