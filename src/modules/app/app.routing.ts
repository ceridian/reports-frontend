

import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthService } from '@services/auth.service';
import { AuthGuard } from '@services/auth-guard.service';

import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {
    path: 'error',
    component: ErrorComponent
  },{
    path: 'reports',
    loadChildren: '@modules/reports/reports.module#ReportsModule',
    canLoad: [AuthGuard],
  },{
    path: 'schedules',
    loadChildren: '@modules/schedules/schedules.module#SchedulesModule',
    canLoad: [AuthGuard]
  },{
    path: 'runs',
    loadChildren: '@modules/runs/runs.module#RunsModule',
    canLoad: [AuthGuard]
  },{
    path: '',
    pathMatch: 'full',
    redirectTo: 'reports'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule],
  providers: [
    AuthGuard,
    AuthService
  ]
})
export class AppRoutingModule { }