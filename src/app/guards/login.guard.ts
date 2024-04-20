import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginServiceService } from '../services/login-service.service';

export const loginGuard: CanActivateFn = (route, state) => {
  let ls = inject(LoginServiceService);
  let patterns = inject(Router);
  if(!ls.isAuth()){
    patterns.navigate(['login/']);
    return false;
  }
  return true;
};
