import { Injectable } from '@angular/core';
import { TelegramLoginData } from '../models/telegram-login-data.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TelegramLoginService {
  public loginData: Observable<TelegramLoginData>;

  private loginDataSubject: BehaviorSubject<TelegramLoginData>;

  private storageKey = 'telegramLoginData';

  constructor() {
    this.loadStorage();
    window.telegramLoginFn = loginData => this.telegramLogin(loginData);
  }

  public logout() {
    this.loginDataSubject.next(null);
    localStorage.removeItem(this.storageKey);
  }

  private telegramLogin(loginData: TelegramLoginData) {
    this.loginDataSubject.next(loginData);
    this.saveStorage(loginData);
  }

  private loadStorage() {
    const storeData = localStorage.getItem(this.storageKey);
    this.loginDataSubject = new BehaviorSubject<TelegramLoginData>(JSON.parse(storeData));
    this.loginData = this.loginDataSubject.asObservable();
  }

  private saveStorage(data: TelegramLoginData) {
    const storeData = JSON.stringify(data);
    localStorage.setItem(this.storageKey, storeData);
  }
}
