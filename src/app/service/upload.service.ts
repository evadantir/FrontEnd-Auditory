import { Component,Injectable } from "@angular/core"
import {HttpModule, Http,Response} from '@angular/http';
import 'rxjs/add/operator/map'
import { Audios } from '../class/audio'

@Injectable()
export class UploadService {

  constructor(private http: Http){}

  apiAudioUrl: string = 'http://repositoryservice.herokuapp.com/audio';
  postAudio(data:Audios) {
    return this.http.post(this.apiAudioUrl, data, {})
      .map(res =>  res.json());
  }
}
