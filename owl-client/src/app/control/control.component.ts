import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
export class ControlComponent implements OnInit {

  constructor(private loginSvc: LoginService, private router: Router) { }

  ngOnInit() {
  }

  public logout(){
    this.loginSvc.logout();
    // this.router.navigate(['/login']);
  }

}
