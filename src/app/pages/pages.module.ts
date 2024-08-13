import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { CobranzaComponent } from './cobranza/cobranza.component';
import { QuejasComponent } from './quejas/quejas.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { PlannerComponent } from './planner/planner.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { TrainingComponent } from './training/training.component';



@NgModule({
  declarations: [
    DashboardComponent,
    PagesComponent,
    CobranzaComponent,
    QuejasComponent,
    PlannerComponent,
    TrainingComponent
  ],
  exports: [
    DashboardComponent,
    PagesComponent,
    CobranzaComponent,
    QuejasComponent,
    PlannerComponent,
    TrainingComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule,
    FullCalendarModule
  ]
})
export class PagesModule { }
