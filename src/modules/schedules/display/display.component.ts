import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SchedulesService } from '../schedules.service';

import { Schedule, SchedType, DaysOfWeek } from '@models/Schedule';
import { Option } from '@models/Option';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  schedule: Schedule;
  types: Option[];
  days: Option[];
  loaded: boolean = false;

  constructor(private service: SchedulesService, private route: ActivatedRoute) {
    this.service.schedule$.subscribe(s => {
      this.schedule = s;
    });
    this.init();
  }

  ngOnInit() {
    this.route.paramMap.subscribe(route => {
      let id = route.get('id');
      this.loaded = true;
      this.service.send({addr: 'findById', value: id});
    });
  }

  onSave(){
    this.service.send({addr:'save',value: this.schedule});
    this.service.toSchedules();

  }

  onCancel(){
    this.service.toSchedules();
  }

  private init(): void{
    this.types = [
      {value: SchedType.Once, label: 'Once'},
      {value: SchedType.Hourly, label: 'Hourly'},
      {value: SchedType.Daily, label: 'Daily'},
      {value: SchedType.Weekly, label: 'Weekly'},
      {value: SchedType.Monthly, label: 'Monthly'},
    ];
    this.days = [
      {value: DaysOfWeek.Sunday, label: 'Sunday'},
      {value: DaysOfWeek.Monday, label: 'Monday'},
      {value: DaysOfWeek.Tuesday, label: 'Tuesday'},
      {value: DaysOfWeek.Wensday, label: 'Wensday'},
      {value: DaysOfWeek.Thursday, label: 'Thursday'},
      {value: DaysOfWeek.Friday, label: 'Friday'},
      {value: DaysOfWeek.Saturday, label: 'Saturday'},
    ]
  }

}
