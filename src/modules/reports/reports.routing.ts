import { Routes, RouterModule } from '@angular/router';

import { DisplayComponent } from './display/display.component';
import { ReportsComponent } from './reports.component';

const routes: Routes = [
  {
    path: 'display/:id',
    component: DisplayComponent,
  },{
    path: '',
    component: ReportsComponent,
    pathMatch: 'full'
  }
];

export const ReportsRoutes = RouterModule.forChild(routes);