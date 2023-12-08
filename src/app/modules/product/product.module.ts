import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductRoute } from './product.routing';
import { CardBaseModule } from 'src/app/components/card-base/card-base.module';
import { TitleModule } from 'src/app/components/title/title.module';
import { MatIconModule } from '@angular/material/icon';
import { PipesModule } from '../../pipes/pipes.module';
import { MatTabsModule } from '@angular/material/tabs';
import { ProductService } from './product.service';
import { ModalBidComponent } from './modal-bid/modal-bid.component';

@NgModule({
  declarations: [ProductComponent, ModalBidComponent],
  providers: [ProductService],
  imports: [
    CommonModule,
    TitleModule,
    MatIconModule,
    ProductRoute,
    MatTabsModule,
    CardBaseModule,
    PipesModule,
  ],
})
export class ProductModule {}
