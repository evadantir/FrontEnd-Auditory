import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/from';

import { Audio } from '../class/audio';

@Injectable()
export class AudioService {

  constructor(private http: Http){}

  apiAudioUrl: string = 'http://localhost:3333/audio';
  audiovar: Audio[];

  private handleError(error:any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  getallAudioByCategory(category: string): Promise<Audio[]> {
    /* Pengambilan via API*/
    return this.http
      .get(this.apiAudioUrl + "?=" + category)
      .map((response: Response) => {
        let audio = response.json();
        console.log(audio);
        let listAudio = new Array<Audio>();
        let i : number;
        for(i=0;i<audio.length;i++)
        {
          listAudio.push(
          {
            audioID: audio[i].audioId,
            audioTitle: audio[i].audioTitle,
          	audioLength: audio[i].length,
          	albumData: audio[i].album,
          	filePath: audio[i].filePath,
          	tag: audio[i].tags,
          	category: audio[i].category
          });
        }
        return listAudio;
      }).toPromise().catch(this.handleError);
    }

  getallAudio(): Promise<Audio[]> {
    /* Pengambilan via API*/
    return this.http
      .get(this.apiAudioUrl)
      .map((response: Response) => {
        let audio = response.json();
        console.log(audio);
        let listAudio = new Array<Audio>();
        let i : number;
        for(i=0;i<audio.length;i++)
        {
          listAudio.push(
          {
            audioID: audio[i].audioId,
            audioTitle: audio[i].audioTitle,
          	audioLength: audio[i].length,
          	albumData: audio[i].album,
          	filePath: audio[i].filePath,
          	tag: audio[i].tags,
          	category: audio[i].category
          });
        }
        console.log(listAudio);
        return listAudio;
      }).toPromise().catch(this.handleError);
  }

  findAudio(audioID : number): Promise<Audio> {
    return this.http
      .get(this.apiAudioUrl + "/" + audioID)
      .map((response: Response) => {
        let audio = response.json();
        let foundAudio : Audio;
        foundAudio.audioID = audio.ID;
        foundAudio.audioTitle = audio.audioTitle;
        foundAudio.audioLength = audio.length;
        foundAudio.albumData = audio.album;
        foundAudio.filePath = audio.filePath;
        foundAudio.tag = audio.tags;
        foundAudio.category = audio.category;
        return foundAudio;
      }).toPromise().catch(this.handleError);
  }
}
