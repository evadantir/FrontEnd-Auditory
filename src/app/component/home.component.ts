import { Component, OnInit } from '@angular/core';
import { Audio } from '../class/audio';
import { AudioService } from '../service/audio.service'
//import { SLIDER } from '../mock/mock-slider'
//import '../js/slider'

@Component({
  selector: 'app-home',
  templateUrl: 'app/template/home.component.html'
  //styleUrls: [ 'css/home.component.css' ]
})

export class HomeComponent implements OnInit{

  constructor(private audioService: AudioService) {

  }

  listAudio: Audio[] = [];
  //public listSlider = SLIDER;

  ngOnInit(): void {
      this.audioService.getallAudio();
  }
}
