import { Component } from '@angular/core';
import { Employee, EmployeeType } from './Employee';
import { Person } from './Person';

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
  eventType = 'NoEvent';
  keys = '';
  value = '';
  onClick() {
    const input = [1, 3];
    const [first, second] = input;
    alert('Button Clicked' + first + ' ' + second);
  }
  /*onMouseHover(evt: any) {
    evt.target.src = '/assets/images/smiley1.png';
    this.eventType = evt.type;
  }
  onMouseOut(evt: any) {
    evt.target.src = '/assets/images/smiley2.png';
    this.eventType = evt.type;
  }*/
  onMouse(evt: any) {
    if (evt.type === 'mouseover') {
      evt.target.src = '/assets/images/smiley1.png';
      this.eventType = evt.type;
    } else {
      evt.target.src = '/assets/images/smiley2.png';
      this.eventType = evt.type;
    }
  }
  onKey(evt: any) {
    this.keys += evt.key;
    this.value = evt.target.value;
  }
  onKey1(value: string) {
    this.value = value;
  }
}
