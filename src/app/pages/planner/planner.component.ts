import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es';
import { SapService } from '../../services/sap.service';

@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrl: './planner.component.css'
})
export class PlannerComponent implements OnInit {

  

  events: [] = [];

  currentYear = new Date().getFullYear();
  
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    editable: false,
    selectable: true,
    locale: esLocale,
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: ''
    },
    validRange:{
      start: `${this.currentYear}-01-01`
    }

  }
  constructor( private sapService: SapService){}


  ngOnInit(): void {
    const currentYear = new Date().getFullYear();

    this.sapService.getVisitas().subscribe({
      next: resp => {

        console.log('ingresando al servicio');
        console.log(resp);
       
        this.calendarOptions.events = resp.map( event => ({
          title: event.asunto,
          start: event.fecha,
          allDay:true
        }))
      },
      error: error => console.error(error)
    });
  }

  event = [
    {
      id: '1',
      title: 'Reunión de Equipo',
      start: '2024-08-07T10:00:00',
      end: '2024-08-07T12:00:00',
      description: 'Reunión mensual con el equipo de desarrollo.',
      location: 'Sala de reuniones 2',
      classNames: ['team-meeting'],
      backgroundColor: '#007bff',
      borderColor: '#0056b3',
      textColor: '#ffffff',
      extendedProps: {
        organizer: 'Ana García',
        attendees: ['Carlos', 'Luis', 'Marta']
      }
    },
    {
      title: 'Cumpleaños de María',
      date: '2024-08-10',
      description: 'Celebración del cumpleaños de María.',
      classNames: ['birthday'],
      backgroundColor: '#ffc107',
      textColor: '#000000'
    },
    {
      title: 'Cumpleaños de María',
      date: '2024-08-06',
      description: 'Celebración del cumpleaños de María.',
      
      
    }
  ];

  };

  



  
  

  

