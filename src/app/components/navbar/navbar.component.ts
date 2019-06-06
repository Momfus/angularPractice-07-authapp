import { Component } from '@angular/core';

import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent {

  constructor( protected auth: AuthService ) { // Lo coloco protected y no private, asi tiene acceso al servicio desde el html

    auth.handleAuthentication(); // Donde se inicia la aplicación o donde se requiere para manejar la forma de usar la autentificaicón

  }

  login() {

    this.auth.login();

  }


  salir() {

    // En la configuración de auth0 (del que se usa aca) hay que agregar en la opción "Allowed Logouts URLs" esto: http://localhost:4200,
    this.auth.logout();

  }

}
