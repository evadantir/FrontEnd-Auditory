import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/from';

@Injectable()
export class AlbumService {

  constructor(private http: Http){}
  apiAudioUrl: string = 'http://localhost:3333/';

  private handleError(error:any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  getAllAlbum(): Promise<string[]>{
    /* Pengambilan via API*/
    return this.http
      .get(this.apiAudioUrl + "album")
      .map((response: Response) => {
        let abm = response.json();
        let listAlbum = new Array<string>();
        let i : number;
        for(i=0;i<abm.length;i++)
        {
          listAlbum[i] = abm[i];
        }
        return listAlbum;
      }).toPromise().catch(this.handleError);
  }
}
