import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 4 Application !!';
  textColor = 'red';
  bgColor1 = 'yellow';
  bgColor2 = 'Green';
  isSpecial = true;
  canSave = true;
  yellowBG = 'yellowBackGround';
  setClasses()  {
    const classes = { saveable: true, special: true };
    return classes;
  }
}
