import { Component,Injectable } from "@angular/core"
import {HttpModule, Http,Response} from '@angular/http';
import 'rxjs/add/operator/map'
import { Audio } from '../class/audio'

@Injectable()
export class UploadService {

  constructor(private http: Http){}

  apiAudioUrl: string = 'http://192.168.177.1:3333/audio';
  postAudio(data:Audio) {
    return this.http.post(this.apiAudioUrl, data, {})
      .map(res =>  res.json());
  }
}
