import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Auth } from '../../interfaces/auth.interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  users: Auth[] = [];

  user: Auth = {
    id: '',
    user: '',
    rol: '',
    email: '',
    password: '',
  }

  hide = true;
  private autetificado: boolean = false;

  private router: Router;
  private authService: AuthService;

  constructor(router: Router, authService: AuthService) {
    this.router = router;
    this.authService = authService;
  }

  entrar() {

    this.authService.getUsuario().subscribe(users => this.users = users);

    for (let index = 0; index < this.users.length; index++) {
      if ((this.users[index].email === this.user.email) && (this.users[index].password === this.user.password)) {
        // this.user = this.users[index];
        // console.log(this.user);
        this.login();
      }else{
        console.log("usuario no encontrado");
      }
    }
  }

  login() {
    this.authService.login().subscribe(resp => {
      if (resp.id) {
        this.router.navigate(['./admin']);
      }
    })
  }

  logout() {
    this.router.navigate(['404']);
  }

}
