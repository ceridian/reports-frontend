import { Component, OnInit, Input, Output, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Device } from '@models/Device';
import { Point } from '@models/Point';

@Component({
  selector: 'reports-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {
  @Input() device: Device;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  columns: string[] = ['dis','bacnetCur','curVal','unit'];
  dataSource: MatTableDataSource<Point>;

  constructor() {
    
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.device.points);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  public getDevice(): Device{
    return this.device;
  }

  applyFilter(filterValue: string): void{
    console.log(filterValue);
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
