
import { Component, OnInit, Input } from '@angular/core';

import { Report, ActionTypes } from '@models/Report';

export interface Option{
  value: number;
  label: string;
}

@Component({
  selector: 'reports-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {
  @Input() report: Report;

  operations: Option[];
  operation: ActionTypes;

  constructor() {
    this.initDropdowns();
  }

  ngOnInit() {
    
  }

  initDropdowns(){
    this.operations = [
      {value: ActionTypes.Average, label: 'Average'},
      {value: ActionTypes.MinMax, label: 'MinMax'},
      {value: ActionTypes.Total, label: 'Total'},
      {value: ActionTypes.Raw, label: 'Raw'},
      {value: ActionTypes.Delta, label: 'Delta'},
      {value: ActionTypes.Current, label: 'Current'},
    ]
    this.operation = ActionTypes.Raw;
  }

}
