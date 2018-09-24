import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
  logs: string[] = [];
  log(message: string) {
    this.logs.push(message);
    console.log(message);
  }
  printLog() {
    for (let i = 0; i < this.logs.length; i++) {
      console.log(this.logs[i] + '\n');
    }
  }
  constructor() { }

}
