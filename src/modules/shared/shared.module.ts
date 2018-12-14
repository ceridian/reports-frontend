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
  MatCheckboxModule,
  MatSelectModule
} from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { BusyComponent } from './busy/busy.component';
import { AlertComponent } from './alert/alert.component';
import { FormsModule } from '@angular/forms';

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
    MatCheckboxModule,
    FormsModule,
    MatSelectModule
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
    AlertComponent,
    FormsModule,
    MatSelectModule,
  ],
  declarations: [
    BusyComponent,
    AlertComponent,
  ]
})
export class SharedModule { }
