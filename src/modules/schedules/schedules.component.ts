
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource, MatSort} from '@angular/material';

import { Schedule, SchedKeys } from '@models/Schedule';
import { SchedulesService } from './schedules.service';
import { Message } from '@models/Message';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.scss']
})
export class SchedulesComponent implements OnInit {
  columns: string[] = ['name','user','report','schedType','next','updatedAt','createdAt','actions'];
  dataSource: MatTableDataSource<Schedule>;
  loaded: boolean = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  private schedules: Schedule[];

  constructor(private service: SchedulesService) {
    this.schedules = [];
    this.service.onMessage().subscribe((data: Message) => {
      if(data.addr === 'existing'){
        this.schedules = data.value.map(s => {
          return new Schedule(s);
        });
        this.initDataSource();
      }
    });
    this.service.send({addr: 'existing', value: ''});
  }

  ngOnInit() {
  }

  onClick(action,row){
    switch(action){
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

  toTypeStr(num: number): string{
    return SchedKeys[num];
  }

  private edit(schedule: Schedule): void{
    this.service.toDisplay(schedule.id);
  }

  private delete(schedule: Schedule): void{
    this.service.send({addr: 'delete', value: schedule.id});
    this.remove(schedule.id);
  }

  private remove(id): void{
    let hold = [];
    for(let i=0; i<this.schedules.length; i++){
      if(this.schedules[i].id !== id){
        hold.push(this.schedules[i]);
      }
    }
    this.schedules = hold;
    this.initDataSource();
  }

  private initDataSource(): void{
    this.dataSource = new MatTableDataSource(this.schedules);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.loaded = true;
  }

}
