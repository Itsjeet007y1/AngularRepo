import { Component, OnInit } from '@angular/core';
import { Employee } from './Employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor() { }
  departments = ['Sales', 'Development', 'Training', 'Accounts', 'Engineering'];
  emp: Employee = new Employee(101, '', 10000, 'Engineering');
  get diagnotics() { return JSON.stringify(this.emp); }
  ngOnInit() {
  }

}
