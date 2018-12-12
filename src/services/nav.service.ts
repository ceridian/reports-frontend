import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Message } from '@models/Message';
import { SocketService } from '@services/socket.service';


@Injectable({
  providedIn: 'root'
})
export class NavService {

  constructor(private router: Router, private socket: SocketService) {
    this.socket.message$.subscribe((msg: Message) => {
      if(msg.addr === 'nav'){
        this.director(msg.value);
      }
    });
  }

  private director(msg: Message){
    switch(msg.addr){
      case 'report': this.toReportsDisplay(msg.value); break;
    }
  }

  public toReports(){
    this.router.navigate(['/reports']);
  }

  public toSchedules(){
    this.router.navigate(['/schedules']);
  }

  public toReportsNew(){
    this.router.navigate(['/reports/new']);
  }

  public toReportsDisplay(id:string){
    this.router.navigate(['/reports/display/'+id]);
  }

  public toSchedule(id:string){
    this.router.navigate(['/schedules/display/'+id]);
  }

  public toDynamic(d: string){
    this.router.navigate([d]);
  }

  public toError(){
    this.router.navigate(['/error']);
  }

}