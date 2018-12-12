
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { Message } from '@models/Message';
import { NavService } from '@services/nav.service';
import { SocketService } from '@services/socket.service';

import { Report } from '@models/Report';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {
  private _existing: Subject<Report[]>;
  public existing$: Observable<Report[]>;

  private _report: Subject<Report>;
  public report$: Observable<Report>;

  constructor(private socket: SocketService, private nav: NavService) {
    this._existing = new Subject<Report[]>();
    this.existing$ = this._existing.asObservable();
    this._report = new Subject<Report>();
    this.report$ = this._report.asObservable();
    this.listeners();
  }

  private listeners(): void{
    this.socket.message$.subscribe((data: Message) => {
      if(data.addr === 'reports'){
        this.router(data.value);
      }
    });
  }

  private router(msg: Message): void{
    switch(msg.addr){
      case 'existing': this.existing(msg.value); break;
      case 'findById': this.findById(msg.value); break;
    }
  }

  private existing(arr){
    let reports = arr.map(r => {
      return new Report(r);
    });
    this._existing.next(reports);
  }

  private findById(r){
    this._report.next(new Report(r));
  }

  public onMessage(): Observable<Message> {
    return Observable.create(ob =>{
      this.socket.message$.subscribe((data: Message) => {
        if(data.addr === 'reports'){
          ob.next(data.value);
        }
      });
    });
  }




  public send(msg: Message): void{
    this.socket.send({addr: 'reports',value: msg});
  }

  public toDisplay(id: string){
    this.nav.toReportsDisplay(id);
  }

  public toSchedule(id: string){
    let sub = this.socket.message$.subscribe((data: Message) => {
      if(data.addr === 'schedule'){
        if(data.value.addr === 'newSchedule'){
          this.nav.toSchedule(data.value.value);
          sub.unsubscribe();
        }
      }
    });
    this.socket.send({addr: 'schedule', value: {addr: 'newSchedule', value: id}})
  }

}

