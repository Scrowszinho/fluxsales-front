import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  getLocalStorageData(key: string): any {
    return JSON.parse(localStorage.getItem(key));
  }

  setLocalStorageData(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  clearLocalStorage(): void {
    localStorage.clear();
  }
}
