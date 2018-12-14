import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Route } from '@angular/compiler/src/core';

import { CookieService } from './cookie.service';
import { SocketService } from './socket.service';
import { NavService } from './nav.service';

import { User } from '@models/User';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: User;
  private _user: Subject<User>
  public user$: Observable<User>;

  private status: string;
  private _status: Subject<string>;
  public status$: Observable<string>;

  private isLoggedIn: boolean;
  
  public token: string;
  
  constructor(private cookie: CookieService, private socket: SocketService, private nav: NavService){
    this._user = new Subject<User>();
    this.user$ = this._user.asObservable();
    this.status = 'Loading...';
    this._status = new Subject<string>();
    this.status$ = this._status.asObservable();
    this.logout();
  }

  public checkAuth(route: Route): Observable<boolean>{
    return Observable.create(ob => {
      if(this.isLoggedIn){
        ob.next(true);
        ob.complete();
      }else{
        this.token = this.getToken();
        if(this.token){
          this.socket.initSocket(this.token).subscribe(user => {
            if(user){
              this.cookie.setCookie('jwt',this.token);
              this.user = user;
              this._user.next(this.user);
              this.isLoggedIn = true;
              ob.next(true);
              ob.complete();
            }else{
              this.notLoggedIn();
              ob.next(false);
              ob.complete();
            }
          });
        }else{
          this.notLoggedIn();
          ob.next(false);
          ob.complete();
        }
      }
    });
  }

  public logout(): void{
    this.isLoggedIn = false;
    this.user = null;
    this.token = null;
  }

  private login(): void{
    this.socket.initSocket(this.token).subscribe(user => {
      this.cookie.setCookie('jwt',this.token);
      this.user = user;
      this._user.next(this.user);
    });
  }

  private notLoggedIn(): void{
    this.status = 'Not logged in to Commander';
    this._status.next(this.status);
    this.nav.toError();
  }

  private getToken(): string{
    let token = null;
    token = this.getParameterByName('jwt');
    if(!token){
      token = this.cookie.getCookie('jwt');
    }
    return token;
  }

  private getParameterByName(name: string) :string{
    let url = window.location.href;
    let cut = url.split('?');
    let hold = null;
    if(cut[1]){
      let params = cut[1].split('&');
      params.forEach(p => {
        let param = p.split('=');
        if(param[0] === name){
          hold = param[1];
        }
      });
    }
    return hold;
  }

}
