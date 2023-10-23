import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {


	private _datatable: Array<any> = []
  @Input() isLoading: boolean = false;
  @Input() set data(data: Array<any>) {
    this._datatable = data;
  }

}
