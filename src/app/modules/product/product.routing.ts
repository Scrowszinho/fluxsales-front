import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './product.component';
import { NewProductComponent } from './new-product/new-product.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: ProductComponent },
      { path: 'new-product', component: NewProductComponent }
    ]),
  ],
  exports: [RouterModule],
})
export class ProductRoute {}
