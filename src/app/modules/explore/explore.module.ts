import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExploreComponent } from './explore.component';
import { CardBaseModule } from '../../components/card-base/card-base.module';
import { TitleModule } from '../../components/title/title.module';
import { CardModule } from '../../components/card/card.module';
import { PipesModule } from '../../pipes/pipes.module';
import { ExploreRoute } from './explore.routing';
import { ExploreService } from './explore.service';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ExploreComponent],
  providers: [ExploreService],
  imports: [
    CommonModule,
    CardBaseModule,
    MatIconModule,
    ExploreRoute,
    TitleModule,
    CardModule,
    PipesModule,
  ],
})
export class ExploreModule {}
