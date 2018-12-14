import { Component, OnInit, Input } from '@angular/core';
import { Report } from '@models/Report';

@Component({
  selector: 'reports-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  @Input() report: Report;

  constructor() { }

  ngOnInit() {
  }

}
