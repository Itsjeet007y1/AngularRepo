import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ 
  name: 'age' 
})
export class AgePipe {
  transform(value: Date): string {
    const todayOffset = new Date().getTime();
    const parDateOffset = value.getTime();
    const diff = todayOffset - parDateOffset;
    const oneDay = 1000 * 60 * 60 * 24;
    const years = Math.floor(diff / (oneDay * 365));
    return years + ' years';
  }
}
