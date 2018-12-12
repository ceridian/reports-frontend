import { Routes, RouterModule } from '@angular/router';

import { SchedulesComponent } from './schedules.component';
import { DisplayComponent } from './display/display.component';

const routes: Routes = [
  {
    path: 'display/:id',
    component: DisplayComponent
  },{
    path: '',
    component: SchedulesComponent,
    pathMatch: 'prefix'
  }
];

export const SchedulesRoutes = RouterModule.forChild(routes);