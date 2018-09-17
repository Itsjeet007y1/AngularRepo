import { Component } from '@angular/core';
import { Person } from './Person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
})
export class PersonComponent {
  person: Person = new Person('Jitendra', 'Kumar');
}
