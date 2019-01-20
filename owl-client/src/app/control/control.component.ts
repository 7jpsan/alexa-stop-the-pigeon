import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared/login.service';
import { OwlControlService } from '../shared/owl-control.service';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
export class ControlComponent implements OnInit {

  constructor(private loginSvc: LoginService, private moveSvc: OwlControlService) { }

  ngOnInit() {
  }

  public move(path){
    this.moveSvc.move(path);
  }

  public logout(){
    this.loginSvc.logout();
    // this.router.navigate(['/login']);
  }

}
