import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ButtonModule,
    TableModule,
    InputTextModule,
  ],
  declarations: [DashboardComponent],
})
export class DashboardModule {}
