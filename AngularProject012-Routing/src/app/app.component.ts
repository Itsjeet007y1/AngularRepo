import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 4 Application !!';
  constructor(private router: Router) { }
  goHome() {
    this.router.navigate(['dept']);
  }
}
