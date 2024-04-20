import { Component, Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NetService } from '../services/net.service';
import { LoginServiceService } from '../services/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
@Injectable()
export class LoginComponent {
  constructor(private lg:LoginServiceService){

  }
  login(f:NgForm){
    const user = f.value.user;
    const password = f.value.password;
    this.lg.login(user,password)
    f.form.reset()
    console.log('pericion hecha!')


  }
}
