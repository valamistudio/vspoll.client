import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { TelegramLoginService } from './services/telegram-login.service';
import { TelegramLoginData } from './models/telegram-login-data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  public user: TelegramLoginData = null;

  constructor(
    private telegramLoginService: TelegramLoginService,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.telegramLoginService.loginData.subscribe(data => {
      this.user = data;
      this.changeDetector.detectChanges();
    });
  }

  logout() {
    this.telegramLoginService.logout();
  }
}
