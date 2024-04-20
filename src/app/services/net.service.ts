import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { endpoints,APIendPoint, APIAuthObjectParametrer, APIAuthResponse } from '../env/enviroment.env';
import { Router } from '@angular/router';
import { LoginServiceService } from './login-service.service';


@Injectable({
  providedIn: 'root'
})
export class NetService {
  private token = new EventEmitter<string>();
  private url:APIendPoint = endpoints.auth;

  setToken(token:string){
    this.token.emit(token);
  }
  getToken():EventEmitter<string>{
    return this.token;
  }
  constructor(private http:HttpClient,private patterns:Router) {
  }
  testCon(){
    this.http.get(this.url.getPath()).subscribe(
      {
        next:f=>console.log(f),
        error:e=>console.log('error ' + JSON.stringify(e))
      }
    );

  }
  passwordAuth(user:string,password:string,onSucressNavegate:string){
    console.log(user,password)
    this.url.setParams(new APIAuthObjectParametrer(user,password));
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    //console.log(JSON.stringify(this.url.getParams()[0]))
    this.http.post(this.url.getPath(),this.url.getParams(),{headers:headers}).subscribe(
      {
        next:(response)=>{
          this.setToken((<APIAuthResponse>response).secret);
          this.patterns.navigate([onSucressNavegate]);
      },
        error:error=>console.log(`ha ocurrido un error \n \t ${JSON.stringify(error)}`)
      }
    );
  }
}
