import { Component } from '@angular/core';
import { Employee, EmployeeType } from './Employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 4 Application !!';
  developerName = 'Jitendra Kumar';
  isModified = true;
  evilTitle = '<script>alert("evil never sleeps")</script>';
  onClick() {
    alert('Button Clicked');
  }
}
