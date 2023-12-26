import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-textbox',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ],
  templateUrl: './textbox.component.html',
  styleUrl: './textbox.component.scss'
})
export class TextboxComponent {

  @Input() label: string;
  @Input() placeholder : string;
  @Input() form : FormGroup;
  @Input() name : string; 
  @Input() readonly : boolean;
  @Input() hint : string;
  @Input() mask: string;
  @Input() preFixIcon  : string;
  @Input() suFixIcon  : string;
  @Input() typee: 'rounded-field' | 'normal' = 'rounded-field'
  @Input() type: 'text' | 'email' | 'password' | 'number' = 'text';
}
