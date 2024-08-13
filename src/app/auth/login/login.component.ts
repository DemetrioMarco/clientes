import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from '../../services/usuarios.service';
import { SapService } from '../../services/sap.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email: string = '';
  password: string = '';

  url: string = 'Socio;'
  id: string = '';
  constructor( 
    private userService: UsuariosService, 
    private authService: AuthService,
    private router: Router){}

  onSubmit() {
  
    this.userService.getUserByPass(this.email, this.password).subscribe(
      (resp) => {
        if(resp.id != null){
          localStorage.setItem('cod',resp.cod_socio);
          localStorage.setItem('socio',resp.socio);
          localStorage.setItem('user', JSON.stringify(resp));
          this.authService.getToken(resp.id).subscribe();
          this.router.navigate(['/'])


          console.log(resp);
        }else{
          Swal.fire({
            icon: 'error',
            title: 'Login Failed',
            text: 'Invalid username or password'
          })
        }
      }
    );

   
   
  //  this.sapService.getSocios();
   
  }
}
