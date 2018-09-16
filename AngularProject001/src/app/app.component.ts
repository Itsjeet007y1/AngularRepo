import { Component } from '@angular/core';
import { Employee, EmployeeType } from './Employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 4 App !!';
  faculty = 'Jitendra Kumar';
  duration = 300;
  facultyAvailability = true;
  relatedCourses = ['Core Java', 'Advance Java', 'Spring', 'Hibernate,', 'Jpa', 'Angular'];
  supportingEmployees: Employee[] = [
    new Employee(1, 'Santosh', 500000, EmployeeType.Permanet),
    new Employee(2, 'Ashok', 400000, EmployeeType.Permanet),
    new Employee(3, 'Mahendra', 300000, EmployeeType.Temporary),
    new Employee(4, 'Jitendra', 200000, EmployeeType.Temporary),
    new Employee(5, 'Dharmendra', 100000, EmployeeType.Contract),
    new Employee(6, 'Rajendra', 100000, EmployeeType.Contract)
  ];
  selectedSupportingEmployee: Employee = this.supportingEmployees[3];
}
