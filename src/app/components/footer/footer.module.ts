import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { PipesModule } from "../../pipes/pipes.module";



@NgModule({
    declarations: [
        FooterComponent
    ],
    exports: [
        FooterComponent
    ],
    imports: [
        CommonModule,
        PipesModule
    ]
})
export class FooterModule { }
