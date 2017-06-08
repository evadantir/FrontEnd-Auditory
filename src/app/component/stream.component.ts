import { Component, AfterViewInit, OnInit } from '@angular/core';
import { ActivatedRoute,Router, Params} from '@angular/router';
import { Audio } from '../class/audio'
import { StreamService } from '../service/stream.service'

@Component({
  selector: 'my-app',
  //templateUrl: 'app/template/stream.component.html'
})
export class StreamComponent implements OnInit,AfterViewInit {

  allAudio: Audio[] = [];
  audioFile: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private streamService: StreamService){
    }

  ngAfterViewInit(){
    var  str_Elemenr = `
    <script type="text/javascript" src="../js/stream/stream.js"></script>
    `;
    var nodeElement =   this.createDiv("div",str_Elemenr);
    document.body.appendChild(nodeElement);
  }

  ngOnInit():void{
    this.streamService.getStreamPath(this.route.snapshot.params['audioId'])
      .then(playing => this.audioFile = playing);

    this.goStream(this.audioFile);
  }

  createDiv(node_name:any,textElement:any) {
    var _nodeElement = document.createElement(node_name);
    _nodeElement.innerHTML = textElement;
    return _nodeElement;
  }

  goStream(pathFile:string):void{
    this.router.navigate(['streaming?id=pathFile']);
  }
}
