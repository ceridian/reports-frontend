import { Component, OnInit, Input } from '@angular/core';
import { Report } from '@models/Report';

@Component({
  selector: 'reports-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  @Input() report: Report;

  constructor() { }

  ngOnInit() {
  }

}
