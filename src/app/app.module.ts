import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SuperHeroService, SuperPowerService} from './Services/tutorial.service';
import { GetComponent } from './get/get.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    GetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [SuperHeroService, SuperPowerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
