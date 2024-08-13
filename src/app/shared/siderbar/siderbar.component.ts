import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-siderbar',
  templateUrl: './siderbar.component.html',
  styleUrl: './siderbar.component.css'
})
export class SiderbarComponent implements OnInit {

  activeRoute!: string;

  menuItems = [
    { path: '/dashboard', label: 'Dashboard', icon:'bi-speedometer2' },
    { path: 'cobranza', label: 'Cobranza', icon:'bi-currency-dollar' },
    { path: 'planner', label: 'Planner', icon:'bi-calendar-date' },
    { path: 'training', label: 'Training', icon:'bi-person-video3' },
    { path: '/', label: 'Documentos', icon:'bi-file-earmark-pdf' }
  ];
  
  isSidebarVisible: boolean = true;
  
  usuario = '';

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.activeRoute = this.router.url;
      });
  }
  
  ngOnInit(): void {
   const user =  JSON.parse(localStorage.getItem('user')!);
   this.usuario = user.nombre;
  }


  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
    document.getElementById('sidebar')?.classList.toggle('d-none', !this.isSidebarVisible);
  }

  isActive(path:string):boolean{
    if (path.startsWith('/')) {
      return this.activeRoute === path;
    } else {
      return this.activeRoute.endsWith(path);
    }
  }

}
