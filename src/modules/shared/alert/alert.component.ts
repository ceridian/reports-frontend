import { Component, OnInit } from '@angular/core';
import {Alert, AlertType} from '@models/Alert';
import { AlertService } from '@services/alert.service';

@Component({
  selector: 'shared-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  alerts: Alert[];

  constructor(private service: AlertService) {
    this.alerts = [];
  }

  ngOnInit() {
    this.service.alert$.subscribe(data => {
      this.alerts.push(data);
    });
  }

  toClass(type: AlertType): string{
    switch(type){
      case AlertType.success: return 'success';
      case AlertType.warning: return 'warning';
      case AlertType.danger: return 'danger';
    }
  }

}
