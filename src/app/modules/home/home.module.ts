import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoute } from './home.routing';
import { CardModule } from 'src/app/components/card/card.module';
import { CardBaseModule } from 'src/app/components/card-base/card-base.module';
import { TitleModule } from 'src/app/components/title/title.module';
import { PipesModule } from "../../pipes/pipes.module";



@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        TitleModule,
        CardModule,
        CardBaseModule,
        HomeRoute,
        PipesModule
    ]
})
export class HomeModule { }
