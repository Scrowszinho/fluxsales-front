import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { PipesModule } from "../../pipes/pipes.module";
import { MatIconModule } from '@angular/material/icon';



@NgModule({
    declarations: [
        CardComponent
    ],
    exports: [
        CardComponent
    ],
    imports: [
        CommonModule,
        MatIconModule,
        PipesModule
    ]
})
export class CardModule { }
