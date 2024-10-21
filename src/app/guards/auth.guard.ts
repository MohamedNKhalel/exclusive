import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  let _Route = inject(Router);
  if(sessionStorage.getItem('token') != null){

    return true;
  }
  else{
    _Route.navigate(['/main']);
    return false;
  }
};
