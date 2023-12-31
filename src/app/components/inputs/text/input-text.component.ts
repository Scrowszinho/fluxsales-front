import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';

@Component({
  selector: 'input-text',
  templateUrl: './input-text.html',
  styleUrls: ['../inputs.scss']
})
export class InputTextComponent {

    @Input() label: string;
    @Input() placeholder : string;
    @Input() form : FormGroup;
    @Input() name : string; 
    @Input() readonly : boolean;
    @Input() hint : string;
    @Input() mask: string;
    @Input() appearance : MatFormFieldAppearance = 'outline';
    @Input() preFixIcon  : string;
    @Input() suFixIcon  : string;
    @Input() typee: 'rounded-field' | 'normal' = 'rounded-field'
    @Input() type: 'text' | 'email' | 'password' | 'number' = 'text';
    @Output() onChange: EventEmitter<any> = new EventEmitter();
    hasError(error){
        return this.form.hasError(error, [this.name]);
    }
    onInputChange(value: any): void {
      this.onChange.emit(value);    
    }

}
