
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutes } from './reports.routing';
import { SharedModule } from '@modules/shared/shared.module';
//components
import { ReportsComponent } from './reports.component';
import { DisplayComponent } from './display/display.component';
import { DevicesComponent } from './devices/devices.component';
import { DeviceComponent } from './device/device.component';
import { OptionsComponent } from './options/options.component';
import { GridComponent } from './grid/grid.component';
import { ChartComponent } from './chart/chart.component';
import { EmailsComponent } from './emails/emails.component';

@NgModule({
  imports: [
    CommonModule,
    ReportsRoutes,
    SharedModule
  ],
  declarations: [
    ReportsComponent,
    DisplayComponent,
    DevicesComponent,
    DeviceComponent,
    OptionsComponent,
    GridComponent,
    ChartComponent,
    EmailsComponent
  ]
})
export class ReportsModule { }
