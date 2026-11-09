
import { Directive, ElementRef, Input, OnChanges, inject } from '@angular/core';

@Directive({
  selector: '[appTaskHighlight]',
  standalone: true
})
export class TaskHighlight implements OnChanges {
  private element = inject(ElementRef);

  @Input() appTaskHighlight = '';

  ngOnChanges(): void {
    // Highlight tasks with high priority
    if (this.appTaskHighlight === 'High') {
      this.element.nativeElement.style.borderLeft = '5px solid #ef4444';
      this.element.nativeElement.style.backgroundColor = '#fff5f5';
    } else {
      this.element.nativeElement.style.borderLeft = '5px solid #ddd';
      this.element.nativeElement.style.backgroundColor = 'white';
    }
  }
}
