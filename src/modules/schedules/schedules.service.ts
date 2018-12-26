
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { Message } from '@models/Message';
import { NavService } from '@services/nav.service';
import { SocketService } from '@services/socket.service';

import { Schedule } from '@models/Schedule';

@Injectable({
  providedIn: 'root'
})
export class SchedulesService {
  private _existing: Subject<Schedule[]>;
  public existing$: Observable<Schedule[]>;

  private _schedule: Subject<Schedule>;
  public schedule$: Observable<Schedule>;

  constructor(private socket: SocketService, private nav: NavService) {
    this._existing = new Subject<Schedule[]>();
    this.existing$ = this._existing.asObservable();
    this._schedule = new Subject<Schedule>();
    this.schedule$ = this._schedule.asObservable();
    this.listeners();
  }

  private listeners(): void{
    this.socket.message$.subscribe((data: Message) => {
      if(data.addr === 'schedules'){
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

  private existing(arr): void{
    console.log(arr);
    let schedules = arr.map(r => {
      return new Schedule(r);
    });
    this._existing.next(schedules);
  }

  private findById(s): void{
    this._schedule.next(new Schedule(s));
  }

  public onMessage(): Observable<Message> {
    return Observable.create(ob =>{
      this.socket.message$.subscribe((data: Message) => {
        if(data.addr === 'schedules'){
          ob.next(data.value);
        }
      });
    });
  }

  public send(msg: Message): void{
    this.socket.send({addr: 'schedules',value: msg});
  }

  public toDisplay(id: string):void{
    this.nav.toSchedule(id);
  }

  public toSchedules():void{
    this.nav.toSchedules();
  }

}
