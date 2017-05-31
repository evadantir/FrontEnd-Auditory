import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './component/app.component';
//import { StreamComponent }  from './component/stream.component';
import { AudioListComponent } from './component/audiolist.component';
import { CategoryComponent } from './component/category.component';
import { AlbumComponent } from './component/album.component';
import { LoginComponent } from './component/login.component';
import { RegisterComponent } from './component/register.component';
import { FileUploaderComponent } from './component/file-uploader.component'; 

import { AudioService } from './service/audio.service';
import { AlbumService } from './service/album.service';
import { CategoryService } from './service/category.service';
import { UserService } from './service/user.service';
import { AuthenticationService } from './service/authentication.service';
import { AlertService } from './service/alert.service';

//import { AuthGuard } from './guards/aurh.guard';
//import { fakeBackendFactory } from './helpers/fake-backend';

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule, AppRoutingModule ],
  declarations: [
    AppComponent,
//    StreamComponent,
    AudioListComponent,
    CategoryComponent,
    AlbumComponent,
	LoginComponent,
	RegisterComponent,
	FileUploaderComponent
  ],
  providers: [
    AudioService,
    AlbumService,
    CategoryService,
	UserService,
	AuthenticationService,
	AlertService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
