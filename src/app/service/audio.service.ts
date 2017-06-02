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
    /* Pengambilan via Mock*/
    /*return this.getallAudio()
      .then(aud => aud.find(audio => audio.category === category));*/
    /*let aud = new Array<Audio>();
    this.getallAudio()
      .then(p => aud = p);
    console.log(aud);
    let i:number;
    for(i=0;i<aud.length;i++)
    {
      if(aud[i].category === category)
      {
        this.audiovar[i]=aud[i];
      }
    }
    //console.log(this.audiovar);
    return Promise.resolve(this.audiovar);*/

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
            audioID: audio[i].ID,
            audioTitle: audio[i].audioTitle,
          	audioLength: audio[i].length,
          	albumUrl: audio[i].audioTitle,
          	filePath: audio[i].filePath,
          	tag: audio[i].tags,
          	category: audio[i].category
          });
        }
        return listAudio;
      }).toPromise().catch(this.handleError);
    }

  getallAudio(): Promise<Audio[]> {
    /* Pengambilan via Mock*/
    //return Promise.resolve(AUDIOS);

    /* Pengambilan via API*/
    return this.http
      .get(this.apiAudioUrl)
      .map((response: Response) => {
        let audio = response.json();
        let listAudio = new Array<Audio>();
        let i : number;
        for(i=0;i<audio.length;i++)
        {
          listAudio.push(
          {
            audioID: audio[i].ID,
            audioTitle: audio[i].audioTitle,
          	audioLength: audio[i].length,
          	albumUrl: audio[i].audioTitle,
          	filePath: audio[i].filePath,
          	tag: audio[i].tags,
          	category: audio[i].category
          });
        }
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
        foundAudio.albumUrl = audio.audioTitle;
        foundAudio.filePath = audio.filePath;
        foundAudio.tag = audio.tags;
        foundAudio.category = audio.category;
        return foundAudio;
      }).toPromise().catch(this.handleError);
  }
}
