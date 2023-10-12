import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoute } from './home.routing';
import { CardModule } from 'src/app/components/card/card.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    HomeRoute
  ]
})
export class HomeModule { }
