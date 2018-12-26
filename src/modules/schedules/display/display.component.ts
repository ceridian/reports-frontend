import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { SchedulesService } from '../schedules.service';

import { Schedule, SchedType, DaysOfWeek } from '@models/Schedule';
import { Option } from '@models/Option';
import { TzComponent } from '@modules/shared/tz/tz.component';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  @ViewChild(TzComponent) tz!: TzComponent;

  schedule: Schedule;
  types: Option[];
  days: Option[];
  loaded: boolean = false;

  constructor(private service: SchedulesService, private route: ActivatedRoute) {
    this.service.schedule$.subscribe(s => {
      this.schedule = s;
      this.loaded = true;
    });
    this.init();
  }

  ngOnInit() {
    this.route.paramMap.subscribe(route => {
      let id = route.get('id');
      this.service.send({addr: 'findById', value: id});
    });
  }

  onSave(){
    this.schedule.options.tz = this.tz.getOffset();
    this.service.send({addr:'save',value: this.schedule.toJSON()});
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
