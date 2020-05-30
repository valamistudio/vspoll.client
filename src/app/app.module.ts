import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelegramLoginComponent } from './components/telegram-login/telegram-login.component';
import { TelegramLoginService } from './services/telegram-login.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateComponent } from './components/create/create.component';
import { PollService } from './services/poll.service';
import { OptionService } from './services/option.service';
import { ValidationService } from './services/validation.service';

@NgModule({
  declarations: [
    AppComponent,
    TelegramLoginComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    TelegramLoginService,
    OptionService,
    PollService,
    ValidationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
