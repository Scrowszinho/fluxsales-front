import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardBaseComponent } from './card-base.component';



@NgModule({
  declarations: [
    CardBaseComponent
  ],
  exports: [
    CardBaseComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CardBaseModule { }
