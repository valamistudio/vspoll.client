import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelegramLoginComponent } from './components/telegram-login/telegram-login.component';
import { TelegramLoginService } from './services/telegram-login.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateComponent } from './components/create/create.component';

@NgModule({
  declarations: [
    AppComponent,
    TelegramLoginComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    TelegramLoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
