import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appRowColor]'
})
export class RowColorDirective implements OnChanges {
  @Input() criteria!: string;
  @Input() values!: string[];

  constructor(private el: ElementRef) { }

  ngOnChanges(changes: SimpleChanges): void {
    //excluded first change because of pagination
    if (this.values.includes(this.criteria)) {
      this.el.nativeElement.style.background = 'red'
    } else {
      this.el.nativeElement.style.background = 'white'
    }
  }
}
