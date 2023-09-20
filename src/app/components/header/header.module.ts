import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputsModule } from '../inputs/inputs.module';
import { MatIconModule } from '@angular/material/icon';
import { PipesModule } from "../../pipes/pipes.module";
import { HeaderComponent } from './header.component';



@NgModule({
    declarations: [
        HeaderComponent
    ],
    exports: [
        HeaderComponent
    ],
    imports: [
        CommonModule,
        InputsModule,
        MatIconModule,
        PipesModule
    ]
})
export class HeaderModule { }
