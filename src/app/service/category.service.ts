import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/from';

@Injectable()
export class CategoryService {

  constructor(private http: Http){}

  category: string;
  apiAudioUrl: string = 'http://localhost:3333/';

  private handleError(error:any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  getAllCategory(): Promise<string[]> {
    /* Pengambilan via API*/
    return this.http
      .get(this.apiAudioUrl + "category")
      .map((response: Response) => {
        let cat = response.json();
        let listCategory = new Array<string>();
        let i : number;
        for(i=0;i<cat.length;i++)
        {
          listCategory[i] = cat[i];
        }
        return listCategory;
      }).toPromise().catch(this.handleError);
  }
}
