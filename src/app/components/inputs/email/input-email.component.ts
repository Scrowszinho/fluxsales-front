import { Component, Input } from '@angular/core';
import { InputTextComponent } from '../text/input-text.component';

@Component({
  selector: 'input-email',
  templateUrl: './input-email.html',
  styleUrls: ['../inputs.scss']
})
export class InputEmailComponent extends InputTextComponent{

}
