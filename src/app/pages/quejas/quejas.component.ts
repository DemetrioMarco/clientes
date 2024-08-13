import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-quejas',
  templateUrl: './quejas.component.html',
  styleUrl: './quejas.component.css'
})
export class QuejasComponent {
  isModalOpen = false;

  constructor(){ }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }


  onSubmit() {
    // Aquí puedes manejar la lógica de envío del formulario
    Swal.fire({
      title: 'Formulario enviado'
    });
    this.closeModal();
  }

}
