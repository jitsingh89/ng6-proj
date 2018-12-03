import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  url="https://jsonplaceholder.typicode.com/todos";

  constructor(private  _http: HttpClient) { }

  getTodos(){
   return this._http.get(this.url);
  }
}
