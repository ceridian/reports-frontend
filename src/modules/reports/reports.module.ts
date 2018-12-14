

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsComponent } from './reports.component';
import { DisplayComponent } from './display/display.component';
import { ReportsRoutes } from './reports.routing';
import { SharedModule } from '@modules/shared/shared.module';
import { DevicesComponent } from './devices/devices.component';
import { DeviceComponent } from './device/device.component';
import { OptionsComponent } from './options/options.component';

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
    OptionsComponent
  ]
})
export class ReportsModule { }
