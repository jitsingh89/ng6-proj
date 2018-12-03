import { Component, OnInit } from '@angular/core';
import { AlbumService } from 'src/app/services/album.service';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {
  albums: any;

  constructor(private _albumService : AlbumService) { }

  ngOnInit() {
    this._albumService.getAlbums().subscribe((data)=>{
      this.albums = data;
    })
  }

}
