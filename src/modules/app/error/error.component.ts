import { AuthService } from '@services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {
  msg: string = 'Not logged in to Commander';

  constructor(private auth: AuthService) {
    this.auth.status$.subscribe(status => {
      this.msg = status;
    });
  }

  ngOnInit() {

  }

}
