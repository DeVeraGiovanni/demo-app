import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import {FormsModule, ReactiveFormsModule } from '@angular/forms'
import { provideAnimations } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, MaterialModule, FormsModule, ReactiveFormsModule],
  providers: [provideAnimations()],
  bootstrap: [AppComponent],
})
export class AppModule {}
