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
  selectedAudio: Audio;
  cat1: string = 'Music';

  ngOnInit(): void {
    /*this.audioService.getallAudioByCategory('Music')
      .then(list => this.listAudio = list);*/
      this.audioService.getallAudio();
  }
}
