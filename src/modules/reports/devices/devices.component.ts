
import { Component, OnInit, Input, ViewChildren, QueryList } from '@angular/core';

import { Device } from '@models/Device';

import { DeviceComponent } from '../device/device.component';

@Component({
  selector: 'reports-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {
  @Input() devices: Device[] = [];
  @Input() selected: Device[] = [];

  @ViewChildren(DeviceComponent) devs !: QueryList<DeviceComponent>;

  constructor() {

  }

  ngOnInit() {
    
  }

  public getSelected(): Device[]{
    return this.devs.map(dev => {
      return dev.getSelected();
    });
  }

  public setSelected(selected?: Device[]){
    if(selected){
      this.selected = selected;
    }
    if(this.devs.length === 0){
      setTimeout(() => {
        this.setSelected();
      }, 1000);
    }else{
      this.devs.forEach(dev => {
        let id = dev.getId();
        let points = [];
        this.selected.forEach(sdev => {
          if(id === sdev.id){
            points = sdev.points;
          }
        });
        dev.setSelected(points);
      });
    }
  }

}
