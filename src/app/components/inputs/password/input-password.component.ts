import { Component, Input } from '@angular/core';
import { InputTextComponent } from '../text/input-text.component';

@Component({
  selector: 'input-password',
  templateUrl: './input-password.html',
  styleUrls: ['../inputs.scss']
})
export class InputPasswordComponent extends InputTextComponent{

  shouldShow = false;

}
