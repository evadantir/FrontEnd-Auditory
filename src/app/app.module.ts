import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent }  from './component/app.component';
import { StreamComponent }  from './component/stream.component';

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule ],
  declarations: [ AppComponent, StreamComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
