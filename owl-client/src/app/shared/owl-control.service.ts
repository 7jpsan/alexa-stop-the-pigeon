import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

type OwlHeadControl = "reset" | "left" | "right" | "up" | "down";

@Injectable({
  providedIn: 'root'
})
export class OwlControlService {

  private apiBase = "https://api.stp.jpsan.co.uk";

  constructor(private http: HttpClient) { }

  public move(path: OwlHeadControl): void{
    this.http.post(`${this.apiBase}/owl/head/${path}`, '').subscribe();
  }
}
