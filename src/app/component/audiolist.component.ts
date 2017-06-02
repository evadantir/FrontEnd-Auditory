import { Component, OnInit } from '@angular/core';
import { Audio } from '../class/audio';
import { AudioService } from '../service/audio.service'


@Component({
  selector: 'app-audiolist',
  templateUrl: 'app/template/audiolist.component.html'
})

export class AudioListComponent implements OnInit{

  constructor(private audioService: AudioService) { }

  listAudio: Audio[] = [];
  cat1: string = 'Music';

  ngOnInit(): void {
    /*this.audioService.getallAudioByCategory('Music')
      .then(list => this.listAudio = list);*/
      this.audioService.getallAudio();
  }
}
