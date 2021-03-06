import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@modules/shared/shared.module';
import { SchedulesRoutes } from './schedules.routing';
import { SchedulesService } from './schedules.service';

import { SchedulesComponent } from './schedules.component';
import { DisplayComponent } from './display/display.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SchedulesRoutes
  ],
  declarations: [
    SchedulesComponent,
    DisplayComponent,
  ],
  providers: [SchedulesService]
})
export class SchedulesModule { }
