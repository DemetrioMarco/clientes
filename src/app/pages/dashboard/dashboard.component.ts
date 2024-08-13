import { Component, OnInit } from '@angular/core';
import { SapService } from '../../services/sap.service';
import { Chart } from 'chart.js/auto';
import { Utils } from '../../utils/utils.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  currentDate: Date = new Date();
  socio: string = '';
  
  data: any []= [];
  filteredData: any[] = [];
  selectedMonth: number = this.currentDate.getMonth();

  mesActual: number =  this.currentDate.getMonth();


  chart: any;

  months: any;

  // valores: any;

  constructor(private serviceSap: SapService){
    this.socio = localStorage.getItem('socio') ?? '';

  }


 


  ngOnInit(): void {
    this.months = Utils.months({ count: 12});
    

    this.serviceSap.getCobranza().subscribe({
      next: (resp: any[]) => {
        const currentyear = new Date().getFullYear();
        this.data = resp.filter( item => {
          const itemYear = new Date(item.DocDate).getFullYear();
          return itemYear === currentyear;
        });
        this.filterByMonth(this.selectedMonth);

        // this.valores = this.calculateMonthlySums(this.data);
        
        this.createChart(this.calculateMonthlySums(this.data));

     
      },
      error: error => {
        console.error('Error loading data', error);
  
      }
      
    });

  }

  filterByMonth(month: number): void {
    
    this.filteredData = this.data.filter(item => {
      const itemDate = new Date(item.DocDate); 
      return itemDate.getMonth() === month;
    });
  }

  onMonthChange(event: any): void {
    this.selectedMonth = parseInt(event.target.value, 10);
    this.filterByMonth(this.selectedMonth);
  }

  getMonthName(month: number): string {
    const months = [
      'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
      'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];
    return months[month];
    
  }

  createChart(meses: any[]){

    const labels = Utils.months({ count: this.mesActual + 1 });

    const data = {
      labels: labels,
      datasets: [{
        label: 'Facturación Mensual',
        data: meses,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }]
    };

    const canvas = document.getElementById('canvas') as HTMLCanvasElement;

    if(canvas){
      this.chart = new Chart(canvas, {
        type:'line',
        data
      })
    }else {
      console.error('No se pudo encontrar el elemento canvas.');
    }

    
  }
  
  
  private calculateMonthlySums(data: any[]){


    const sums = Array(this.mesActual).fill(0);

    data
      .forEach(
        (        item: { DocDate: Date; DocTotal: number; }) => {

          const mes = new Date(item.DocDate).getMonth();


          if( mes >= 1 && mes <= this.mesActual){
            sums[mes - 1 ] += Number(item.DocTotal);
          }
        });
   
      return sums;
        
  }
 

  cards = [
    {
      title: 'KPI 1',
      description: '1890',
      image: 'https://via.placeholder.com/150',
      colorClass: 'card-blue'
    },
    {
      title: 'KPI 2',
      description: '1090',
      image: 'https://via.placeholder.com/150',
      colorClass: 'card-green'
    },
    {
      title: 'KPI 3',
      description: '11.46k',
      image: 'https://via.placeholder.com/150',
      colorClass: 'card-orange'
    },
    {
      title: 'KPI 4',
      description: '263',
      image: 'https://via.placeholder.com/150',
      colorClass: 'card-purple'
    }
  ];


}
