import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from './components/header/header.module';
import { FooterModule } from './components/footer/footer.module';
import { PipesModule } from './pipes/pipes.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { provideEnvironmentNgxMask } from 'ngx-mask';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { InterceptorModule } from './core/interceptors/interceptor.module';
import { registerLocaleData } from '@angular/common';
import localeBr from '@angular/common/locales/pt';
registerLocaleData(localeBr, 'pt')

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    PipesModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatSnackBarModule,
    InterceptorModule,
    FooterModule,
    HeaderModule,
    PipesModule,
    BrowserAnimationsModule,
  ],
  providers: [
    provideEnvironmentNgxMask(),
    { provide: LOCALE_ID, useValue: 'pt' }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
