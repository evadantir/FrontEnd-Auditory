import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../service/album.service'

@Component({
  selector: 'app-album',
  templateUrl: 'app/template/album.component.html'
})

export class AlbumComponent implements OnInit {

  constructor(private abmService: AlbumService) {}
  listCategory: String[] = [];

  ngOnInit(): void {
    this.abmService.getAllAlbum()
      .then(list => this.listCategory =list);
  }
}
