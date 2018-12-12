import { DevicesComponent } from '../devices/devices.component';

import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ReportsService } from '../reports.service';

import { Device } from '@models/Device';
import { Report } from '@models/Report';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  @ViewChild(DevicesComponent) devs !: DevicesComponent;

  report: Report = null;
  devices: Device[] = [];

  constructor(private service: ReportsService, private route: ActivatedRoute) {
    this.service.report$.subscribe(r => {
      this.report = r;
      console.log(this.report);
      this.devices = this.report.devices;
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(route => {
      let id = route.get('id');
      console.log(id);
      this.service.send({addr: 'findById', value: id});
    });
  }

  test(){
    console.log(this.report.devices.length);
    console.log(this.devs.getDevices());
  }

}
