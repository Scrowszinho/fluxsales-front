import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductRoute } from './product.routing';
import { CardBaseModule } from 'src/app/components/card-base/card-base.module';



@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoute,
    CardBaseModule
  ]
})
export class ProductModule { }
