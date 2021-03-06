import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  url="https://jsonplaceholder.typicode.com/comments";

  constructor(private  _http: HttpClient) { }

  getComments(){
   return this._http.get(this.url);
  }
}
