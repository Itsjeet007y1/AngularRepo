import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeeService]
})
export class EmployeeComponent implements OnInit {
  employees: Employee[];
  constructor(employeeService: EmployeeService) {
     this.employees = employeeService.getEmployee();
  }

  ngOnInit() {
  }

}
