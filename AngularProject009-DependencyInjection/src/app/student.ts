import { Inject, Injectable } from '@angular/core';

@Injectable()
export class Address { }

@Injectable()
export class Subject { }

@Injectable()
export class Student {
  address: Address;
  subject: Subject;
  constructor(address: Address, subject: Subject) {
    this.address = address;
    this.subject = subject;
  }
}

// @Injectable()
// export class StudentChild extends Student {
//  test = 'Dummy Text';
// }
