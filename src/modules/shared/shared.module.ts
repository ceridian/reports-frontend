import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatListModule,MatIconModule,
  MatSidenavModule,
  MatCardModule,
  MatInputModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatTableModule,
  MatSortModule,
  MatButtonModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  MatExpansionModule,
  MatCheckboxModule
} from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { BusyComponent } from './busy/busy.component';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    MatSidenavModule,
    MatCardModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatTableModule,
    CdkTableModule,
    MatSortModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatExpansionModule,
    MatCheckboxModule
  ],
  exports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    MatSidenavModule,
    MatCardModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatTableModule,
    CdkTableModule,
    MatSortModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    BusyComponent,
    MatExpansionModule,
    MatCheckboxModule,
    AlertComponent
  ],
  declarations: [
    BusyComponent,
    AlertComponent
  ]
})
export class SharedModule { }
