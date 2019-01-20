import { Injectable } from '@angular/core';
import * as randomColor from 'randomcolor';
import { interval, Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ColorizeService {

  private colors = ["red", "green", "pink", "blue", "purple", "black", "magenta"];
  private currentIndex = 0;

  private time$: BehaviorSubject<string> = new BehaviorSubject("red");

  constructor() {
    interval(500)
    .pipe(
      map((x) => this.currentIndex = ++this.currentIndex % this.colors.length), 
      map((x) => this.colors[this.currentIndex])
    ).subscribe((x) => {
      this.time$.next(randomColor({
        luminosity: 'dark'
      }));
    });
  }
  
  public getColor(): Observable<string>{
    // return this.time$;
    return this.time$.asObservable();
  }
}
