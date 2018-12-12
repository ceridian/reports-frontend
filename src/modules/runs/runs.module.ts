import { DisplayComponent } from './display/display.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RunsComponent } from './runs.component';
import { SharedModule } from '@modules/shared/shared.module';
import { RunsRoutes } from './runs.routing';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RunsRoutes
  ],
  declarations: [
    RunsComponent,
    DisplayComponent
  ]
})
export class RunsModule { }
