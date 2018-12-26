import { Component, OnInit } from '@angular/core';
import {Zones, TZ} from './TZ';

@Component({
  selector: 'shared-tz',
  templateUrl: './tz.component.html',
  styleUrls: ['./tz.component.scss']
})
export class TzComponent implements OnInit {
  offset: number;
  zones: TZ[] = Zones;
  constructor() {
    this.offset = Math.round(new Date().getTimezoneOffset()/60);
  }

  ngOnInit() {
  }

  public getOffset(): number{
    return this.offset;
  }

}
