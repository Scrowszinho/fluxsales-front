import { Component } from '@angular/core';
import { ProductService } from './product.service';
import { ActivatedRoute } from '@angular/router';
import { ICompleteOffer } from './interfaces/product.interfaces';
import { SnackBarService } from 'src/app/components/snackbar/snackbar.service';
import { MatDialog } from '@angular/material/dialog'
import { ModalBidComponent } from './modal-bid/modal-bid.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  date = new Date();
  id = 4;
  isLoading = false;
  offer : ICompleteOffer;
  constructor (
    private _service: ProductService,
    private _snackBar: SnackBarService,
    private _matDialog: MatDialog,
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.getProductOffer();
  }

  getProductOffer(): void {
    this.isLoading = true;
    this._service.getProduct(this.id).subscribe({
      next: res => {
        this.offer = res.data;
        this.isLoading = false;
      },
      error: error => {
        this._snackBar.open(error.error.message, 'Ok')
        this.isLoading = false;
      }
    });
  }

  openBidModal(): void {
    const dialogRef = this._matDialog.open(ModalBidComponent, { width: '400px', height: '510px', panelClass: 'default-modal', backdropClass: 'default-backdrop' });
    dialogRef.componentInstance.data = this.offer;
  }
}
