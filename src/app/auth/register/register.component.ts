import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user.model';
import { UsuariosService } from '../../services/usuarios.service';
import { SapService } from '../../services/sap.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  user: User = this.initializeUser();
  socios: any [] = [];
  selectedItem: any;

  constructor(
    private serviceUser: UsuariosService,
    private serviceSap: SapService
  ){}


  ngOnInit(): void {
    this.serviceSap.getSocios().subscribe(
      {
        next: resp => this.socios = resp,
        error: error => console.log(error)
      }
    );
  }

  onSubmit(){
  
    this.serviceUser.insertUser(this.user).subscribe(
    {
      next: resp => {
        if(resp.status == 204){
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: resp.message
          })
        }else{
          Swal.fire({
            icon: 'success',
            title: resp.message
          })
        }
        
      },
      error: error => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error
        })
      }
    }
    );
  }

  seleccionarSocio(event: any):void{
    const c = event.target.value;
    const socio: any = this.socios.filter( s => s.numeroSocioNegocio === c); 

    this.user.socio =  socio[0].razonSocial;
  }

  initializeUser(): User {
    return { nombre:'', correo: '', contrasena: '', cod_socio: '', socio:'' };
  }

}
