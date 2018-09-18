export class Employee {
  Id: number;
  Name: string;
  Salary: number;
  Type: EmployeeType;
  constructor(id: number, name: string, salary: number, type: EmployeeType) {
    this.Id = id;
    this.Name = name;
    this.Salary = salary;
    this.Type = type;
  }
}
export enum EmployeeType {
  Temporary,
  Permanet,
  Contract
}
