import { Injectable } from '@angular/core';
import { NetService } from './net.service';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  token:string = ''
  constructor(private nts:NetService) { }
  login(user:string,password:string){
    this.nts.getToken().subscribe(token=>{
      this.token = token;
    });// nos suscribimos para cuando se le pege la gana darnos el token y que no tengamos que logearnos dos veces
    this.nts.passwordAuth(user,password,'');

  }
  isAuth(){
    if(this.token != ''){
      return true
    }
    return false
  }
}
