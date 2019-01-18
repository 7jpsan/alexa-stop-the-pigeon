import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatGridListModule , MatButtonModule, MatIconModule, MatInputModule, MatSelectModule, RippleGlobalOptions, MAT_RIPPLE_GLOBAL_OPTIONS } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';


const globalRippleConfig: RippleGlobalOptions = {
  disabled: true,
  animation: {
    enterDuration: 300,
    exitDuration: 0
  }
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatGridListModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule
  ],
  providers: [
    {provide: MAT_RIPPLE_GLOBAL_OPTIONS, useValue: globalRippleConfig} 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
