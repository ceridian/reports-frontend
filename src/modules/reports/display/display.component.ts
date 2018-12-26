import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ReportsService } from '../reports.service';
import { AlertService } from '@services/alert.service';
import { DevicesComponent } from '../devices/devices.component';
import { OptionsComponent } from '../options/options.component';

import { Device } from '@models/Device';
import { Report } from '@models/Report';


@Component({
  selector: 'reports-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  @ViewChild(DevicesComponent) devs !: DevicesComponent;
  @ViewChild(OptionsComponent) options !: OptionsComponent;

  report: Report = null;
  devices: Device[] = [];
  selected: Device[] = [];

  constructor(private service: ReportsService, private route: ActivatedRoute, private alert: AlertService) {
    this.service.report$.subscribe(r => {
      this.report = r;
      console.log(this.report);
      this.devices = this.report.devices;
      this.selected = this.report.selected;
      this.devs.setSelected(this.selected);
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(route => {
      let id = route.get('id');
      console.log(id);
      this.service.send({addr: 'findById', value: id});
    });
  }

  onSave(){
    if(this.checkError()){
      return;
    }
    this.service.send({addr:'save',value: this.report});
    this.service.toReports();
  }

  onRun(){
    if(this.checkError()){
      return;
    }
  }

  loadSelectedPoints(): void{
    let devs = this.devs.getSelected();
    this.report.selected = [];
    devs.forEach(dev => {
      if(dev.points.length > 0){
        this.report.selected.push(dev);
      }
    });
  }

  loadEditedReport(): void{
    this.report = this.options.getOptions();
    this.loadSelectedPoints();
    console.log(this.report);
  }

  checkError(): boolean{
    this.loadEditedReport();
    if(this.report.selected.length === 0){
      this.alert.danger('No Points Selected', 'Must select at least one point.');
      return true;
    }
    if(this.report.emails.length === 0){
      this.alert.danger('No Emails', 'Must have at least one email.');
      return true;
    }

    return false;
  }

}
