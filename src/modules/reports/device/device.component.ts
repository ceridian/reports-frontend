import { Component, OnInit, Input, Output, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Device } from '@models/Device';
import { Point } from '@models/Point';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'reports-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {
  @Input() device: Device;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  columns: string[] = ['select','dis','bacnetCur','curVal','unit'];
  dataSource: MatTableDataSource<Point>;
  selection: SelectionModel<Point>;

  constructor() {

  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.device.points);
    this.selection = new SelectionModel(true,[]);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  public getDevice(): Device{
    this.device.points = this.selection.selected;
    return this.device;
  }

  applyFilter(filterValue: string): void{
    console.log(filterValue);
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
    this.selection.clear() :
    this.dataSource.data.forEach(row => this.selection.select(row));
  }

  onClick(row){
    this.selection.toggle(row);
  }

}
