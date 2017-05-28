import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './component/app.component';
import { StreamComponent }  from './component/stream.component';
import { AudioListComponent } from './component/audiolist.component';
import { CategoryComponent } from './component/category.component';
import { AlbumComponent } from './component/album.component';

import { AudioService } from './service/audio.service';
import { AlbumService } from './service/album.service';
import { CategoryService } from './service/category.service';

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule, AppRoutingModule ],
  declarations: [
    AppComponent,
    StreamComponent,
    AudioListComponent,
    CategoryComponent,
    AlbumComponent
  ],
  providers: [
    AudioService,
    AlbumService,
    CategoryService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
