import { Employee } from './employee';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  emps: Employee[];
  constructor() {
    const lstEmp: Employee[] = [
      { empId: 1, empName: 'Jitndra', empSal: 1243, department: { deptId: 101, deptName: 'Science' } },
      { empId: 2, empName: 'Dharmendra', empSal: 2344, department: { deptId: 102, deptName: 'Enginerring' } },
      { empId: 3, empName: 'Rajendra', empSal: 3445, department: { deptId: 103, deptName: 'Architecht' } },
      { empId: 4, empName: 'Mahendra', empSal: 5555, department: { deptId: 104, deptName: 'Builder' } }
    ];
    this.emps = lstEmp;
   }
  ngOnInit() {
  }

}
