import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { InputPasswordComponent } from './password/input-password.component';
import { InputEmailComponent } from './email/input-email.component';
import { InputTextComponent } from './text/input-text.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    NgxMaskDirective, 
    NgxMaskPipe,
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
  ],
  declarations: [
    InputPasswordComponent,
    InputEmailComponent,
    InputTextComponent,
  ],
  exports: [InputPasswordComponent, InputEmailComponent, InputTextComponent],
})
export class InputsModule {}
