import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/from';
import { Playlist } from '../mock/mock-playlist'
import { Audio } from '../class/audio'
import { AudioService } from './audio.service'

export class StreamService {

  constructor(
    private http: Http,
    private audioService: AudioService){}

  aud: Audio;
  path: string;

  private handleError(error:any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  getPlaylist(): Promise<Audio[]>{
    return Promise.resolve(Playlist);
  }

  getStreamPath(id:string): Promise<string>{
    this.audioService.findAudio(id)
      .then(ad => this.aud = ad)

    this.path = this.aud.filePath;
    return Promise.resolve(this.path);
  }

  addToPlaylist(selected: Audio):void {
    Playlist.push(selected);
  }
}
