import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { TelegramLoginService } from './services/telegram-login.service';
import { Authentication } from './models/authentication.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  public user: Authentication = null;

  constructor(
    private telegramLoginService: TelegramLoginService,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.telegramLoginService.authentication.subscribe(data => {
      this.user = data;
      this.changeDetector.detectChanges();
    });
  }

  logout() {
    this.telegramLoginService.logout();
  }
}
