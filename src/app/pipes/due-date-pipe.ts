
import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'dueDate',
  standalone: true
})
export class DueDatePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) {
      return 'No due date';
    }

    const datePipe = new DatePipe('en-US');
    return datePipe.transform(value, 'MMM d, yyyy', 'UTC') ?? value;
  }
}
