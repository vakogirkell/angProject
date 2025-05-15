import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

export const profileBlockGuard: CanActivateFn = (route, state) => { 
  let cookie = inject(CookieService)
  if( cookie.get("user")) {
    return true
  } else {
    alert('You need to autorize')
    return false;

  }
};
