import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar'

@Injectable({
	providedIn: 'root'
})
export class SnackBarService {
	
	constructor(private _snackBar: MatSnackBar){}

	open(message: string, action: string, config?: MatSnackBarConfig<any>): MatSnackBarRef<SimpleSnackBar> {
		return this._snackBar.open(message, action, config);
	}
}
