
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { Message } from '@models/Message';
import { User } from '@models/User';

import * as socketIo from 'socket.io-client';

const SERVER_URL = 'http://localhost:4242';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket;

  private _message: Subject<Message>;
  public message$: Observable<Message>;

  private user: User;

  constructor(){
    this._message = new Subject<Message>();
    this.message$ = this._message.asObservable();
  }

  public initSocket(token): Observable<User> {
    this.socket = socketIo(SERVER_URL+'?token='+token);
    this.bus();
    return this.init();
  }

  public send(message: Message): void {
    this.socket.emit('message', message);
  }

  private init(): Observable<User>{
    return Observable.create(ob => {
      this.socket.on('init', data => {
        ob.next(new User(data));
        ob.complete();
      });
    });
  }

  private bus(): void{
    this.socket.on('message', (data: Message) => {
      this._message.next(data);
    });
  }

}