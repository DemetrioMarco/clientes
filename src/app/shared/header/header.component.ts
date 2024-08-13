import { Component } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private usuarioService: UsuariosService){}

  logout(){
    this.usuarioService.logout();
  }

}
