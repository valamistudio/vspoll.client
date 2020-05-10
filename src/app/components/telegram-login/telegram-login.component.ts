import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-telegram-login',
  templateUrl: './telegram-login.component.html'
})
export class TelegramLoginComponent implements AfterViewInit {
  @ViewChild('script', {static: true}) script: ElementRef;

  convertToScript() {
    const element = this.script.nativeElement;
    const script = document.createElement('script');
    script.src = environment.telegramWidgetUrl;
    script.setAttribute('data-telegram-login', environment.telegramBotName);
    script.setAttribute('data-size', 'large');
    // Callback function in global scope
    script.setAttribute('data-onauth', 'telegramLoginFn(user)');
    script.setAttribute('data-request-access', 'read');
    element.parentElement.replaceChild(script, element);
  }

  ngAfterViewInit() {
    this.convertToScript();
  }
}
