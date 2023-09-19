import { Component, Input } from '@angular/core';
import { InputTextComponent } from '../text/input-text.component';

@Component({
  selector: 'input-password',
  templateUrl: './input-password.html',
  styleUrls: ['./input-password.scss']
})
export class InputPasswordComponent extends InputTextComponent{

  shouldShow = false;

}
