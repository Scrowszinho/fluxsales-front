import { Component, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  // @Output() productId = new EventEmitter();

  constructor(private _route: Router) {}

  goToProduct(id: number): void {
    this._route.navigate(['/product/' + id]);
  }
}
