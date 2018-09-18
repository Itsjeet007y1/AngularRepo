import { Component, Input, OnInit, OnChanges, OnDestroy, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@Component({
  selector: 'app-success',
  template: `<p>This is success...</p>`
})
  @Component({
  selector: 'app-failure',
  template: `<p>This is failure...</p>`
})
export class AppComponent implements OnInit, OnChanges, OnDestroy, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked {
  title = 'Angular 4 Application !!';
  ngOnInit() {
    console.log('ngOnInit fired');
  }
  ngOnChanges() {
    console.log('ngOnChanges fired');
  }
  ngOnDestroy() {
    console.log('ngOnDestroy fired');
  }
  ngDoCheck() {
    console.log('ngDoCheck fired');
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit fired');
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked fired');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit fired');
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked fired');
  }
}
