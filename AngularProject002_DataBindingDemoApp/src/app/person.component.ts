import { Component, Input } from '@angular/core';
import { Person } from './Person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
})
export class PersonComponent {
  @Input() firstName: string;
  @Input() lastName: string;
  person: Person = new Person('Jitendra', 'Kumar');
  changeToUpperCase(value: string): string {
    return value.toUpperCase();
  }
}
