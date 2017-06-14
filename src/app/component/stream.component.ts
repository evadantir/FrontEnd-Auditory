import { Component, OnInit, Injectable } from '@angular/core';
import { ActivatedRoute,Router, Params} from '@angular/router';
import { Audios } from '../class/audio'
import { StreamService } from '../service/stream.service'

@Component({
  selector: 'my-app',
  templateUrl: 'app/template/stream.component.html'
})

@Injectable()
export class StreamComponent implements OnInit {

  allAudio: Audios[] = [];
  audioFile: string;
  streamUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private streamService: StreamService){
  }

  ngOnInit():void{
    this.streamService.getStreamPath(this.route.snapshot.params['audioId'])
      .then(playing => this.audioFile = playing);

    //this.goStream(this.audioFile);
    //var audio = new Audio(this.audioFile);
  }

  goStream(pathFile:string):void{
    this.router.navigate(['streaming?id=pathFile']);
  }
}
