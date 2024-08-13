import { Component } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.css'
})
export class PagesComponent {


  constructor(private userService: UsuariosService) {}

  ngOnInit() {
    
  }

 

}
