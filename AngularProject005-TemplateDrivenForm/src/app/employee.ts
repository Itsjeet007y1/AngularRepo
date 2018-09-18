export class Employee {
  id: number;
  name: string;
  salary: number;
  department: string;
  constructor(id: number, name: string, sal: number, dept: string) {
    this.id = id;
    this.name = name;
    this.salary = sal;
    this.department = dept;
  }
}
