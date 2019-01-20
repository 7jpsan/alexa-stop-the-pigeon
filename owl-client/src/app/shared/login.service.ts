import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export type User = {
  username: string,
  id: string,
  apiKey: string
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private basepath = "https://api.stp.jpsan.co.uk";

  private anonUser: User =  {
    apiKey: '',
    id: '',
    username: 'anonymous'
  };

  private loggedIn$ = new BehaviorSubject<boolean>(false);
  private user$ = new BehaviorSubject<User>(this.anonUser);

  constructor(private http: HttpClient) { }

  public isLoggedIn(): Observable<boolean>{
    return this.loggedIn$.asObservable();
  }

  public user(): Observable<User>{
    return this.user$.asObservable();
  }

  public logout(){
    this.loggedIn$.next(false);
    this.user$.next(this.anonUser);
  }

  public login(data: {username: string, password: string}): void{
    this.http.post<User>(`${this.basepath}/login`, data).subscribe((res) => {
      if(res.id && res.apiKey && res.username){
        this.user$.next(res);
        this.loggedIn$.next(true);
      }
    });
  }
}
