import { Component } from '@angular/core';
import { TitleModule } from '../../../components/title/title.module';
import { PipesModule } from '../../../pipes/pipes.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { INewProduct } from '../interfaces/product.interfaces';
import { SnackBarService } from 'src/app/components/snackbar/snackbar.service';
import { getMessage } from 'src/app/locale/messages';
import { Router } from '@angular/router';
import { IExploreOffers } from '../../explore/interfaces/explore.interfaces';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.scss',
})
export class NewProductComponent {
  form!: FormGroup;
  preview:IExploreOffers = {
    bids: 23,
    end_date: new Date(),
    start_date: new Date(),
    id: 0,
    last_bid: 100,
    product_name: ''
  }
  constructor(
    private _formBuilder: FormBuilder,
    private _snackBar: SnackBarService,
    private _productService: ProductService,
    private _router: Router
    ) {}

  ngOnInit() {
    this.buildForm();
  }

  previewCard(): void {
    this.preview = {
      bids: 23,
      end_date: new Date(),
      start_date: new Date(),
      id: 0,
      last_bid: 100,
      product_name: this.form.controls['name']?.value
    }
  }

  buildForm(): void {
    this.form = this._formBuilder.group({
        name: ['', [Validators.required]],
        description: ['', [Validators.required]],
        weight: ['', [Validators.required]],
        value: ['', [Validators.required]]
    });
  }

  getProductData(): INewProduct {
    const data = this.form.getRawValue();
    return {
      description: data.description,
      name: data.name,
      value: +data.value,
      weight: +data.weight
    }
  }

  createProduct(): void { 
    if(this.form.invalid) return;
    this._productService.createProduct(this.getProductData()).subscribe({
      next: () => {
        this._snackBar.open(getMessage('label.Product_Success_created'), 'Ok');
        this._router.navigate(['']);
      },
      error: error => {
        this._snackBar.open(error.error.message, 'Ok')
      }
    })
  }
}
