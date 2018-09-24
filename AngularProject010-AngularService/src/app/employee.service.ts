import {Injectable} from '@angular/core';
import {Employee} from './employee';
import { LoggerService } from './logger.service';

@Injectable()
export class EmployeeService {
  constructor(private logger: LoggerService) {}
  getEmployee(): Employee[] {
    this.logger.log('Fetching Employeess..');
    const employees: Employee[] = [
      new Employee(1, 'Jitendra', 11000, new Date(2017, 3, 30)),
      new Employee(2, 'Employee2', 31000, new Date(2017, 4, 29)),
      new Employee(3, 'Employee3', 51000, new Date(2017, 5, 27)),
      new Employee(4, 'Employee4', 16000, new Date(2017, 6, 3)),
      new Employee(5, 'Dharmendra', 31000, new Date(2017, 7, 7)),
      new Employee(6, 'Employee6', 91000, new Date(2017, 8, 5)),
      new Employee(7, 'Employee7', 21000, new Date(2017, 9, 10))
    ];
    this.logger.log('Fetching of employees completed...');
    return employees;
  }

}
