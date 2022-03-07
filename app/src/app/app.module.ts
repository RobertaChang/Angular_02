import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputTextComponent } from './input-text/input-text.component';
import { InputNumberComponent } from './input-number/input-number.component';
import { InputDateComponent } from './input-date/input-date.component';
import { InputPasswordComponent } from './input-password/input-password.component';
import { InputButtonComponent } from './input-button/input-button.component';
import { InputEmailComponent } from './input-email/input-email.component';
import { InputCpfComponent } from './input-cpf/input-cpf.component'

@NgModule({
  declarations: [
    AppComponent,
    InputTextComponent,
    InputNumberComponent,
    InputDateComponent,
    InputPasswordComponent,
    InputButtonComponent,
    InputEmailComponent,
    InputCpfComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
