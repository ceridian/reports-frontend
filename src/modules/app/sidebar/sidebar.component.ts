import { Component, OnInit } from '@angular/core';

import { AuthService } from '@services/auth.service';
import { Router, NavigationEnd } from '@angular/router';
import { Page } from '@models/Page';
import { User } from '@models/User';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  user: User;
  pages: Page[];

  constructor(private router: Router, private auth: AuthService){
    this.auth.user$.subscribe((user: User) => {
      this.user = user;
      this.pages = user.pages;
    });
  }

  ngOnInit(){
    this.routerWatcher();
  }

  private activePage(id: string){
    for(let i in this.pages){
      if(this.pages[i].link === id){
        this.pages[i].active = true;
      }else{
        this.pages[i].active = false;
      }
    }
  }

  private routerWatcher(){
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd){
        this.activePage('/#'+event.url);
      }
    });
  }

}
