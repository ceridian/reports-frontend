import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Message } from '@models/Message';
import { NavService } from '@services/nav.service';
import { SocketService } from '@services/socket.service';

@Injectable({
  providedIn: 'root'
})
export class SchedulesService {

  constructor(private socket: SocketService, private nav: NavService) { }

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

  public toDisplay(id: string){
    this.nav.toSchedule(id);
  }

}
