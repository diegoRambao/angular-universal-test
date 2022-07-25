import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageModule } from './home/home.module';
import { DetailPageModule } from './detail/detail.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomePageModule,
    DetailPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
