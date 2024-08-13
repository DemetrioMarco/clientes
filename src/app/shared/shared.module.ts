import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { SiderbarComponent } from './siderbar/siderbar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SiderbarComponent,
    BreadcrumbsComponent,
    FooterComponent,
  ],
  exports: [
    HeaderComponent,
    SiderbarComponent,
    BreadcrumbsComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
