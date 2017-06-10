import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Audio } from '../class/audio';
import { AudioService } from '../service/audio.service'
import { StreamService } from '../service/stream.service'


@Component({
  selector: 'app-audiolist',
  templateUrl: 'app/template/audiolist.component.html'
})

export class AudioListComponent implements OnInit/*, AfterViewInit*/{

  constructor(private audioService: AudioService) { }

  listAudio: Audio[] = [];
  cats: string;
  listStream: string[] = [
    "http://192.168.177.61:3003/streaming?id=",
    "http://192.168.177.61:3003/streaming?id=",
    "http://192.168.177.61:3003/streaming?id=",
    "http://192.168.177.61:3003/streaming?id=",
    "http://192.168.177.61:3003/streaming?id=",
    "http://192.168.177.61:3003/streaming?id=",
    "http://192.168.177.61:3003/streaming?id=",
    "http://192.168.177.61:3003/streaming?id=",
    "http://192.168.177.61:3003/streaming?id="
  ];
  selectedAudio: Audio;
  cat1: string = 'Music';

  ngOnInit(): void {
    /*this.audioService.getallAudioByCategory('Music')
      .then(list => this.listAudio = list);*/
      this.audioService.getallAudio()
        .then(list => this.listAudio = list);
  }

}
