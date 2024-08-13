import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthGuard } from '../guards/auth.guard';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CobranzaComponent } from './cobranza/cobranza.component';
import { QuejasComponent } from './quejas/quejas.component';
import { PlannerComponent } from './planner/planner.component';
import { TrainingComponent } from './training/training.component';


const routes: Routes = [
    { 
        path: 'dashboard', 
        canActivate:[ AuthGuard ],
        component: PagesComponent, 
        children: [
          { path: '', component: DashboardComponent },
          { path: 'cobranza', component: CobranzaComponent },
          { path: 'quejas', component: QuejasComponent },
          { path: 'planner', component: PlannerComponent},
          { path: 'training', component: TrainingComponent}
        ]
      },
   
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
