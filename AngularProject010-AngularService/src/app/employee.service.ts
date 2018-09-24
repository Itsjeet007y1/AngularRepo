import {Injectable} from '@angular/core';
import {Employee} from './employee';

@Injectable()
export class EmployeeService {
  getEmployee(): Employee[] {
    const employees: Employee[] = [
      new Employee(1, 'Employee1', 11000, new Date(2017, 3, 30)),
      new Employee(2, 'Employee2', 31000, new Date(2017, 4, 29)),
      new Employee(3, 'Employee3', 51000, new Date(2017, 5, 27)),
      new Employee(4, 'Employee4', 16000, new Date(2017, 6, 3)),
      new Employee(5, 'Employee5', 31000, new Date(2017, 7, 7)),
      new Employee(6, 'Employee6', 91000, new Date(2017, 8, 5)),
      new Employee(7, 'Employee7', 21000, new Date(2017, 9, 10))
    ];
    return employees;
  }
  constructor() {}

}
