import { Component, OnInit } from '@angular/core';
import { SapService } from '../../services/sap.service';
import { SubscriptionLog } from 'rxjs/internal/testing/SubscriptionLog';

@Component({
  selector: 'app-cobranza',
  templateUrl: './cobranza.component.html',
  styleUrl: './cobranza.component.css'
})
export class CobranzaComponent implements OnInit {

  data: any []= [];
  currentDate: Date = new Date();
  vencido = 0;
  socio: string = '';

  constructor( private sapService: SapService){
    this.sapService.getCobranza().subscribe(
      {
        next: resp => {
          this.data = resp;
        },
        error: err => {
          console.log(err);
        }
      }
    );
  }

  ngOnInit(): void { 
    this.socio = localStorage.getItem('socio') ?? '';
  }



getTotalAmount(): number {
  return this.data.reduce((total, item) => total + item.DocTotal, 0);
}

getTotalPagado(): number {
  return this.data.reduce((total, item) => total + item.PaidTodate, 0);
}

getPorPagar(){
  return this.getTotalAmount() - this.getTotalPagado();
}

getVencido(): number{
  return this.data
  .filter( item => {
    if(item.DocTotal != item.PaidTodate && new Date(item.DocDueDate) < this.currentDate){
      return true;
    }
    return this.compareDates(item.DocDueData)
  })
    
  .reduce((total, item) => total + item.DocTotal, 0);

}

getCompraAnual(){
  const currentyear = new Date().getFullYear();
  return this.data
  .filter( item => {
    const itemYear = new Date(item.DocDate).getFullYear();
          return itemYear === currentyear;
  })
  .reduce((total, item) => total + item.DocTotal, 0);
}

compareDates(date1: Date ): boolean {
  const fecha = new Date(date1);
  if(fecha > this.currentDate){
    return true;
  }else{
    return false;
  }
}
  
 
}
