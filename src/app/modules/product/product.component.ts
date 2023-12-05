import { Component } from '@angular/core';
import { ProductService } from './product.service';
import { ActivatedRoute } from '@angular/router';
import { ICompleteOffer } from './interfaces/product.interfaces';

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
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {
    this._route.url.subscribe(params => {
      console.log(params);
      
    });
    this.getProductOffer();
  }

  getProductOffer(): void {
    this.isLoading = true;
    this._service.getProduct(this.id).subscribe({
      next: res => {
        this.offer = res;
        // this.isLoading = false;
      },
      error: error => {
        // this.isLoading = false;
      }
    });
  }
}
