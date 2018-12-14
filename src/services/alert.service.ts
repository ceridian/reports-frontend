import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import {Alert, AlertType} from '@models/Alert';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private _alert: Subject<Alert>;
  public alert$: Observable<Alert>;

  constructor() {
    this._alert = new Subject<Alert>();
    this.alert$ = this._alert.asObservable();
  }

  public success(label: string, body: string): void{
    this._alert.next(new Alert({label: label,body: body,type: AlertType.success}));
  }

  public warning(label: string, body: string): void{
    this._alert.next(new Alert({label: label,body: body,type: AlertType.warning}));
  }

  public danger(label: string, body: string): void{
    this._alert.next(new Alert({label: label,body: body,type: AlertType.danger}));
  }
}
