import { Component /*AfterViewInit*/, OnInit, Injectable } from '@angular/core';
import { ActivatedRoute,Router, Params} from '@angular/router';
import { Audio } from '../class/audio'
import { StreamService } from '../service/stream.service'

@Component({
  selector: 'my-app',
  templateUrl: 'app/template/stream.component.html'
})

@Injectable()
export class StreamComponent implements OnInit/*,AfterViewInit*/ {

  allAudio: Audio[] = [];
  audioFile: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private streamService: StreamService){
    }

  /*ngAfterViewInit(){
    var  str_Elemenr = `
    <script type="text/javascript" src="../js/stream/stream.js"></script>
    `;
    var nodeElement =   this.createDiv("div",str_Elemenr);
    document.body.appendChild(nodeElement);
  }*/

  ngOnInit():void{
    this.streamService.getStreamPath(this.route.snapshot.params['audioId'])
      .then(playing => this.audioFile = playing);

    this.goStream(this.audioFile);
    this.loadScript("../js/stream/stream.js");
  }

  /*createDiv(node_name:any,textElement:any) {
    var _nodeElement = document.createElement(node_name);
    _nodeElement.innerHTML = textElement;
    return _nodeElement;
  }*/

  public loadScript(url:string)
  {
    let node = document.createElement('script');
    node.src = url;
    node.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(node);
  }
  goStream(pathFile:string):void{
    this.router.navigate(['streaming?id=pathFile']);
  }
}
