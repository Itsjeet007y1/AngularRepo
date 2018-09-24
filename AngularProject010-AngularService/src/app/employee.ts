export class Employee {
  id: number;
  name: string;
  salary: number;
  dateOfJoining: Date;
  constructor(id: number, name: string, sal: number, doj: Date) {
    this.id = id;
    this.name = name;
    this.salary = sal;
    this.dateOfJoining = doj;
  }
}
