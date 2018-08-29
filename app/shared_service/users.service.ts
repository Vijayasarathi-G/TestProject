import { User } from './../user';
import { Injectable } from '@angular/core';
import {Http,Response,Headers,RequestOptions} from '@angular/http';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Injectable()
export class UsersService {

  private baseUrl = "http://localhost:8080/api";
  private headers = new Headers({'Content-Type':  'application/json'});
  private options = new RequestOptions({headers:this.headers});
  private user : User;

  constructor(private _http:Http) { }

  getUsers(){
    return this._http.get(this.baseUrl+'/users',this.options).pipe(map((response:Response) => response.json())).
    pipe(catchError(this.errorHandler));
 
  }

  getUser(id:number){

    return this._http.get(this.baseUrl+'/user/'+id,this.options).pipe(map((response:Response) => response.json())).
    pipe(catchError(this.errorHandler));
 
  }

  deleteUser(id:number){

    return this._http.get(this.baseUrl+'/delete/'+id,this.options)/*.pipe(map((response:Response) => response.json()))*/.
    pipe(catchError(this.errorHandler));
 
  }

  createUser(user:User){
    return this._http.post(this.baseUrl+'/createuser',JSON.stringify(user),this.options).pipe(map((response:Response) => response.json())).
    pipe(catchError(this.errorHandler));
  }

  updateUser(user:User){
    return this._http.put(this.baseUrl+'/updateuser',JSON.stringify(user),this.options).pipe(map((response:Response) => response.json())).
    pipe(catchError(this.errorHandler));
  }

  errorHandler(error:Response){
    return throwError(error || 'Server Error');
  }

  setter(user:User){
    this.user=user;
  }

  getter(){
    return this.user;
  }

}
