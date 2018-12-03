import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url="https://jsonplaceholder.typicode.com/users";

  constructor(private  _http: HttpClient) { }

  getUsers(){
   return this._http.get(this.url);
  }
}
