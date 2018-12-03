import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  url="https://jsonplaceholder.typicode.com/albums";

  constructor(private  _http: HttpClient) { }

  getAlbums(){
   return this._http.get(this.url);
  }
}
