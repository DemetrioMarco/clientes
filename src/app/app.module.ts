import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { FullCalendarModule } from '@fullcalendar/angular';


@NgModule({
  declarations: [
    AppComponent,
    NopagefoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    AuthModule, 
    HttpClientModule,
    FullCalendarModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
