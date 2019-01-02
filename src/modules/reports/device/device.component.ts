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

  public getSelected(): Device{
    this.device.points = this.selection.selected;
    return this.device;
  }

  public setSelected(points: Point[]): void{
    this.device.points.forEach(point => {
      points.forEach(p => {
        if(p.id === point.id){
          point.selected = true;
          this.selection.select(point);
        }
      });
    });
  }

  public getId(): string{
    return this.device.id;
  }

  applyFilter(filterValue: string): void{
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.filteredData.length;
    return numSelected >= numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
    this.selection.clear() :
    this.dataSource.filteredData.forEach(row => this.selection.select(row));
  }

  onClick(row){
    this.selection.toggle(row);
  }

}
