import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';

@Component({
  selector: 'input-text',
  templateUrl: './input-text.html',
})
export class InputTextComponent {

    @Input() label: string;
    @Input() placeholder : string;
    @Input() form : FormGroup;
    @Input() name : string; 
    @Input() readonly : boolean;
    @Input() hint : string;
    @Input() appearance : MatFormFieldAppearance = 'outline';
    @Input() preFixIcon  : string;
    
    hasError(error){
        return this.form.hasError(error, [this.name]);
    }

}
