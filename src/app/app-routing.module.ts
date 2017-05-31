import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './component/app.component';
//import { StreamComponent } from './component/stream.component';
import { AudioListComponent } from './component/audiolist.component';
import { CategoryComponent } from './component/category.component';
import { AlbumComponent } from './component/album.component';
import { LoginComponent } from './component/login.component';
import { RegisterComponent } from './component/register.component';
import { FileUploaderComponent } from './component/file-uploader.component'; 


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: AppComponent },
//  { path: 'stream', component: StreamComponent },
  { path: 'list', component: AudioListComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'album', component: AlbumComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'upload', component: FileUploaderComponent }  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
