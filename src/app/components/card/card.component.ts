import { Component, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IExploreOffers } from 'src/app/modules/explore/interfaces/explore.interfaces';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() offer : IExploreOffers;
  @Input() isDisable : boolean = false;

  constructor(private _route: Router) {}

  goToProduct(id: number): void {
    if(this.isDisable) return;
    this._route.navigate(['/product/see/' + id]);
  }
}
