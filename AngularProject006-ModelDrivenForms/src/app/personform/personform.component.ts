import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Person } from './person';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-personform',
  templateUrl: './personform.component.html',
  styleUrls: ['./personform.component.css']
})
export class PersonformComponent implements OnInit {
  person: Person;
  firstName: FormControl;
  lastName: FormControl;
  personForm: FormGroup;
  gender: FormControl;
  degrees = ['BCA', 'BA', 'MCA', 'MBBS', 'Btech'];
  qualification: FormControl;
  message = '';
  changes: string[] = [];
  constructor() { }
  ngOnInit() {
    this.person = new Person();
    this.person.firstName = 'ABCD';
    this.person.lastName = 'XYXZ';
    this.person.gender = 'male';
    this.person.qualification = 'BCA';
    this.createFormControl();
    this.createForm();
    this.personForm.setValue({
      firstName: this.person.firstName,
      lastName: this.person.lastName,
      gender: this.person.gender,
      qualification: this.person.qualification
    });
  }
  createFormControl() {
    this.firstName = new FormControl('Jitendra', [Validators.required, Validators.pattern('[a-zA-Z0-9 ]+')]);
    this.lastName = new FormControl('Kumar', [Validators.required, Validators.pattern('[a-zA-Z0-9 ]+')]);
    this.gender = new FormControl('Male');
    this.qualification = new FormControl('BCA');
    this.firstName.valueChanges.debounceTime(500).distinctUntilChanged().subscribe(change => {
      this.changes.push(change);
    });
  }
  createForm() {
    this.personForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
      gender: this.gender,
      qualification: this.qualification
    });
  }
  onSubmit() {
    if (this.personForm.valid) {
      this.message = 'Form is valid';
    } else {
      this.message = 'Form is not valid';
    }
    //here we submit the server and save the changes...
    this.personForm.reset();
  }
}
