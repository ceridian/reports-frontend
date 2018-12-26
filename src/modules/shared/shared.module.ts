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
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatButtonToggleModule
} from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { BusyComponent } from './busy/busy.component';
import { AlertComponent } from './alert/alert.component';
import { FormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { TzComponent } from './tz/tz.component';

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
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    OwlDateTimeModule, 
    OwlNativeDateTimeModule,
    MatButtonToggleModule
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
    MatDatepickerModule,
    MatNativeDateModule,
    OwlDateTimeModule, 
    OwlNativeDateTimeModule,
    MatButtonToggleModule,
    TzComponent
  ],
  declarations: [
    BusyComponent,
    AlertComponent,
    TzComponent
  ]
})
export class SharedModule { }
