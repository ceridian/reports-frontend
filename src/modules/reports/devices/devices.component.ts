

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

  @ViewChildren(DeviceComponent) devs !: QueryList<DeviceComponent>;

  constructor() {

  }

  ngOnInit() {

  }

  public getDevices(): Device[]{
    return this.devs.map(dev => {
      return dev.getDevice();
    });
  }

  public getSelected(){
    
  }

}
