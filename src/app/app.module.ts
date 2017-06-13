import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';

/* Component Files*/
import { AppComponent }  from './component/app.component';
import { HomeComponent }  from './component/home.component';
import { StreamComponent }  from './component/stream.component';
import { AudioListComponent } from './component/audiolist.component';
import { CategoryComponent } from './component/category.component';
import { AlbumComponent } from './component/album.component';
import { LoginComponent } from './component/login.component';
import { RegisterComponent } from './component/register.component';
import { FileUploaderComponent } from './component/file-uploader.component';

/* Service Files*/
import { AudioService } from './service/audio.service';
import { AlbumService } from './service/album.service';
import { CategoryService } from './service/category.service';
import { StreamService } from './service/stream.service';
import { UserService } from './service/user.service';
import { AuthenticationService } from './service/authentication.service';
import { AlertService } from './service/alert.service';
import { UploadService } from './service/upload.service'

//import { AuthGuard } from './guards/aurh.guard';
//import { fakeBackendFactory } from './helpers/fake-backend';

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule, AppRoutingModule ],
  declarations: [
    AppComponent,
    HomeComponent,
    StreamComponent,
    AudioListComponent,
    CategoryComponent,
    AlbumComponent,
    LoginComponent,
    RegisterComponent,
    FileUploaderComponent,
    FileSelectDirective
  ],
  providers: [
    AudioService,
    AlbumService,
    CategoryService,
    UploadService,
    //StreamService,
    UserService,
    AuthenticationService,
    AlertService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
