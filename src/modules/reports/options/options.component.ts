
import { Component, OnInit, Input, ViewChild } from '@angular/core';



import { Report, ActionTypes, RangeTypes, PrecisTypes } from '@models/Report';
import { EmailsComponent } from '../emails/emails.component';

import { Option } from '@models/Option';
import { TzComponent } from '@modules/shared/tz/tz.component';

@Component({
  selector: 'reports-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {
  @Input() report: Report;
  @ViewChild(EmailsComponent) emails!: EmailsComponent;
  @ViewChild(TzComponent) tz!: TzComponent;

  actions: Option[];
  ranges: Option[];
  precisions: Option[];

  constructor() {
    this.initDropdowns();
  }

  ngOnInit() {
    
  }

  /*
  current just has emails
  raw does not have precision
  */

  initDropdowns(){
    this.actions = [
      {value: ActionTypes.Average, label: 'Average'},
      {value: ActionTypes.MinMax, label: 'MinMax'},
      {value: ActionTypes.Total, label: 'Total'},
      {value: ActionTypes.Raw, label: 'Raw'},
      {value: ActionTypes.Delta, label: 'Delta'},
      {value: ActionTypes.Current, label: 'Current'},
    ];
    this.ranges = [
      {value: RangeTypes.Static, label: 'Static'},
      {value: RangeTypes.Days, label: 'Days'},
      {value: RangeTypes.Weeks, label: 'Weeks'},
      {value: RangeTypes.Months, label: 'Months'},
    ];
    this.precisions = [
      {value: PrecisTypes.Seconds, label: 'Seconds'},
      {value: PrecisTypes.Minutes, label: 'Minutes'},
      {value: PrecisTypes.Hours, label: 'Hours'},
      {value: PrecisTypes.Days, label: 'Days'},
      {value: PrecisTypes.Weeks, label: 'Weeks'},
      {value: PrecisTypes.Months, label: 'Months'},
    ]
  }

  public getOptions(): Report{
    this.report.emails = this.emails.getItems();
    this.report.rangeOptions.tz = this.tz.getOffset();
    return this.report;
  }

}
