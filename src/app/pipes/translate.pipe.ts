import {Pipe, PipeTransform} from "@angular/core";
import { getMessage } from "../locale/messages";

@Pipe({
    name: 'translate'
})
export class TranslatePipe implements PipeTransform {
	transform(key: string, subkey?: string): string {
		return getMessage(key, subkey);
	}
}