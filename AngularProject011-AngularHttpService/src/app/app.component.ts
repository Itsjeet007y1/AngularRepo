import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Tutorial Project !!';
  todaydate;
  jsonvalue = {name: 'JitendraKumar', desg: 'softwareEngineer', salary: 'confidential'};
  constructor(private http: Http) {}
  httpdata1;
  ngOnInit() {
    this.http.get("http://localhost:2020/AMHI/rest/getData").
      map((response) => response.json()).
      subscribe((data) =>{this.displaydata(data);})
  }
  displaydata(data) {this.httpdata1 = data;}
}