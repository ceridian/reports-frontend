import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CookieService {
  private isBrowser: boolean;
  constructor(@Inject(DOCUMENT) private document: any) {
    this.isBrowser = document !== undefined;
  }

  public getCookies(){
    if ( !this.isBrowser ) {
      return {};
    }

    const cookies: {} = {};
    const document: any = this.document;

    if ( document.cookie && document.cookie !== '' ) {
      const split: Array<string> = document.cookie.split(';');

      for ( let i = 0; i < split.length; i += 1 ) {
        const currentCookie: Array<string> = split[ i ].split('=');
        currentCookie[ 0 ] = currentCookie[ 0 ].replace( /^ /, '' );
        cookies[ decodeURIComponent( currentCookie[ 0 ] ) ] = decodeURIComponent( currentCookie[ 1 ] );
        //decodeURIComponent changes %7B%22email%22%3A%22jvanvleet%40kmccontrols.com%22…3A%22Jacob%22%2C%22last%22%3A%22Van%20Vleet%22%7D to {"email":"jvanvleet@kmccontrols.com","first":"Jacob","last":"Van Vleet"}
      }
    }

    return cookies;
  }

  public getCookie(name: string){
    let cookies = this.getCookies();
    return cookies[name] || null;
  }

  public setCookie(name: string,value: string){
    if ( !this.isBrowser ) {
      return;
    }
    let cookieString: string = encodeURIComponent( name ) + '=' + encodeURIComponent( value ) + ';';
    this.document.cookie = cookieString;
  }
}
