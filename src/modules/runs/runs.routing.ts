import { Routes, RouterModule } from '@angular/router';

import { DisplayComponent } from './display/display.component';
import { RunsComponent } from './runs.component';

const routes: Routes = [
  {
    path: 'display',
    component: DisplayComponent
  },{
    path: '',
    component: RunsComponent,
  },
];

export const RunsRoutes = RouterModule.forChild(routes);
