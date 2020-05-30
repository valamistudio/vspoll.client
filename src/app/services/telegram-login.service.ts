import { Injectable } from '@angular/core';
import { TelegramLoginData } from '../models/telegram-login-data.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { Authentication } from '../models/authentication.model';

@Injectable({
  providedIn: 'root'
})
export class TelegramLoginService {
  public authentication: Observable<Authentication>;

  private authenticationSubject: BehaviorSubject<Authentication>;

  private storageKey = 'telegramLoginData';

  constructor() {
    this.loadStorage();
    window.telegramLoginFn = loginData => this.telegramLogin(loginData);
  }

  public logout() {
    this.authenticationSubject.next(null);
    localStorage.removeItem(this.storageKey);
  }

  private telegramLogin(loginData: TelegramLoginData) {
    const authentication = this.convertToAuthentication(loginData);
    this.authenticationSubject.next(authentication);
    this.saveStorage(authentication);
  }

  private convertToAuthentication(loginData: TelegramLoginData): Authentication {
    return new Authentication({
      Id: loginData.id,
      FirstName: loginData.first_name,
      LastName: loginData.last_name,
      Username: loginData.username,
      PhotoUrl: loginData.photo_url,
      AuthDate: loginData.auth_date,
      Hash: loginData.hash
    });
  }

  private loadStorage() {
    const storeData = localStorage.getItem(this.storageKey);
    this.authenticationSubject = new BehaviorSubject<Authentication>(JSON.parse(storeData));
    this.authentication = this.authenticationSubject.asObservable();
  }

  private saveStorage(data: Authentication) {
    const storeData = JSON.stringify(data);
    localStorage.setItem(this.storageKey, storeData);
  }
}
