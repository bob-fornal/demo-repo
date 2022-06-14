import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './features/header/header.component';
import { TheWayOfAngularComponent } from './pages/the-way-of-angular/the-way-of-angular.component';
import { NotTheWayComponent } from './pages/not-the-way/not-the-way.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TheWayOfAngularComponent,
    NotTheWayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
