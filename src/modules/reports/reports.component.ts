
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

import { Report, ActionKeys, RangeKeys } from '@models/Report';
import { ReportsService } from './reports.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  columns: string[] = ['name','action','range','createdAt','updatedAt','actions'];
  dataSource: MatTableDataSource<Report>;
  loaded: boolean = false;

  private reports: Report[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private service: ReportsService) {
    this.reports = [];
    this.service.existing$.subscribe(reports => {
      this.reports = reports;
      this.initDataSource();
    });
    
    this.service.send({addr: 'existing', value: ''});
  }

  ngOnInit() {
    
  }

  onClick(action,row){
    switch(action){
      case 'schedule': this.schedule(row); break;
      case 'edit': this.edit(row); break;
      case 'delete': this.delete(row); break;
    }
  }

  applyFilter(filterValue: string): void{
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  toDateStr(d: any): string{
    if(typeof(d) === 'number'){
      d = new Date(d);
    }
    return d.toLocaleString();
  }

  toActionStr(num: number): string{
    return ActionKeys[num];
  }

  toRangeStr(num: number): string{
    return RangeKeys[num];
  }

  onAdd(): void{
    this.service.send({addr: 'create', value: ''});
    this.loaded = false;
    this.service.onMessage().subscribe(msg => {
      if(msg.addr === 'created'){
        this.service.toDisplay(msg.value);
      }
    })
  }

  private schedule(report: Report): void{
    this.service.toSchedule(report.id);
  }

  private edit(report: Report): void{
    this.service.toDisplay(report.id);
  }

  private delete(report: Report): void{
    this.service.send({addr: 'delete', value: report.id});
    //this.remove(report.id);
  }

  /*private remove(id): void{
    let hold = [];
    for(let i=0; i<this.reports.length; i++){
      if(this.reports[i].id !== id){
        hold.push(this.reports[i]);
      }
    }
    this.reports = hold;
    this.initDataSource();
  }*/

  private initDataSource(): void{
    this.dataSource = new MatTableDataSource(this.reports);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.loaded = true;
  }

}
