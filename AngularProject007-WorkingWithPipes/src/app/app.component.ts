import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Work with Pipes !!';
  todaysDate: Date = new Date(2000,12,17);
  decimalNumber = 123132.12345;
  salary = 234324.1234;
  myPercentage = .7129;
  numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  obj = { empId: 101, empName: 'JitendraKumar', empSal: 20};
  arr = ['person1', 'person2', 'person3'];
  addItem(value: string) {
    this.arr.push(value);
  }
}
