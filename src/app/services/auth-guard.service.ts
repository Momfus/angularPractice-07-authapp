import { Injectable } from '@angular/core';
import {  Router, // Para redirigir
          ActivatedRouteSnapshot,
          RouterStateSnapshot,
          CanActivate
        } from '@angular/router';

import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor( private auth: AuthService ) { }


  canActivate(  next: ActivatedRouteSnapshot, // para saber cuál es la página siguiente que queria ir
                state: RouterStateSnapshot
            ) {

    console.log(next);

    if ( this.auth.isAuthenticated()  ) {

      console.log('Paso el guard');

      return true;

    } else {

      console.error('Bloqueado por el guard');
      return false;

    }

  }

}
