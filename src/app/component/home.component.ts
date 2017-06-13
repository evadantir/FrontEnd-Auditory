import { Component, OnInit } from '@angular/core';
import { Audio } from '../class/audio';
import { AudioService } from '../service/audio.service'
import { SLIDER } from '../mock/mock-slider'
import { Image } from '../class/image'

@Component({
  selector: 'app-home',
  templateUrl: 'app/template/home.component.html',
  //styleUrls: [ 'app/css/home.component.css' ]
})

export class HomeComponent implements OnInit{

  constructor(private audioService: AudioService) {}

  listAudio: Audio[] = [];
  public listSlider: Image[];

  ngOnInit(): void {
      this.audioService.getallAudio();
      this.getSlider()
        .then(sl => this.listSlider = sl);
  }

  getSlider(): Promise<Image[]>{
    return Promise.resolve(SLIDER);
  }
}
