import { Department } from './department';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  depts: Department[];
  constructor() {
    const lstDept: Department[] = [
      { deptId: 1, deptName: 'Science' },
      { deptId: 2, deptName: 'Builder' }
    ];
    this.depts = lstDept;
  }
  ngOnInit() {
  }
}
