

//librarys
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//components
import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';
//services
import { SocketService } from '@services/socket.service';
import { CookieService } from '@services/cookie.service';
import { AuthService } from '@services/auth.service';
import { NavService } from '@services/nav.service';
//custom modules
import { AppRoutingModule } from './app.routing';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SharedModule } from '@modules/shared/shared.module';
import { AlertService } from '@services/alert.service';



@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    AuthService,
    CookieService,
    SocketService,
    NavService,
    AlertService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
