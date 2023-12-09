import { Component } from '@angular/core';
import { IBid, ICompleteOffer, ISendBid } from '../interfaces/product.interfaces';
import { ProductService } from '../product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SnackBarService } from 'src/app/components/snackbar/snackbar.service';
import { MatDialogRef } from '@angular/material/dialog';
import { getMessage } from 'src/app/locale/messages';

@Component({
  selector: 'app-modal-bid',
  templateUrl: './modal-bid.component.html',
  styleUrls: ['./modal-bid.component.scss']
})
export class ModalBidComponent {

  data: ICompleteOffer;
  form!: FormGroup;
  shouldFlash = false;

  constructor (
    private _service: ProductService,
    private _snackBar: SnackBarService,
    private _formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<ModalBidComponent>
  ) {}

  ngOnInit() {
    this.buildForm();
  }

  buildForm(): void {
    this.form = this._formBuilder.group({
      'bid': ['', [Validators.required]],
    });
  }

  getValue(): number {
    const fee = this.form.get("bid").value * 0.05;
    const marketFee = this.form.get("bid").value * 0.1 ;
    const value = this.form.get("bid").value;
    return fee + marketFee + +value;
  }

  sendBid(): void {
    if(this.form.invalid) return;
    const data : ISendBid = {
      offer_id: this.data.id,
      value: +this.form.get("bid").value
    }
    this._service.makeABid(data).subscribe({
      next: () => {
        this._snackBar.open(getMessage('label.Bid_send_successful'), 'Ok');
        this.dialogRef.close();
      },
      error: error => {
        this._snackBar.open(error.error.message, 'Ok')
        this.shouldFlash = true;
        setTimeout(() => {
          this.shouldFlash = false;
        }, 3000);
      }
    })
  }


}
