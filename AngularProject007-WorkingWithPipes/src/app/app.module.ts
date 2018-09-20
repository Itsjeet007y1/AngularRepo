import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgePipe } from './agepipe';
import { JoinPipe } from './joinpipe';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    AgePipe,
    JoinPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
