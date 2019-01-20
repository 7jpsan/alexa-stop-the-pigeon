import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './shared/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Stop the pigeon';
  
  constructor(
    private router: Router,
    private loginSvc: LoginService){
  }

  public ngOnInit(){
    this.loginSvc.isLoggedIn().subscribe((loggedIn) => {
      if(!loggedIn){
        this.router.navigate(['/login']);
      }else{
        this.router.navigate(['/']);
      }
    });
  }
  
}
