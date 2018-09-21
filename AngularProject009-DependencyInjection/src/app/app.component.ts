import { Student, Subject, Address } from './student';
import { Component, ReflectiveInjector } from '@angular/core';

@Component({
  selector: 'app-root',
  providers: [Student, Address, Subject], // using provider injection
  // providers: [{provide: Student, useClass: StudentChild}, Address, Subject], // we can use the above line like this also
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 4 Application !!';
  // constructor() {
  // const injector = ReflectiveInjector.resolveAndCreate([Student, Address, Subject]);
  //  this.stud = injector.get(Student);
  // }
  constructor(private stud: Student) {  // In case of injection using provider
    this.stud = stud;
  }
}
