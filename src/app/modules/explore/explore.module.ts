import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExploreComponent } from './explore.component';
import { CardBaseModule } from "../../components/card-base/card-base.module";
import { TitleModule } from "../../components/title/title.module";
import { CardModule } from "../../components/card/card.module";
import { PipesModule } from "../../pipes/pipes.module";
import { ExploreRoute } from './explore.routing';



@NgModule({
    declarations: [
        ExploreComponent
    ],
    imports: [
        CommonModule,
        CardBaseModule,
        ExploreRoute,
        TitleModule,
        CardModule,
        PipesModule
    ]
})
export class ExploreModule { }
