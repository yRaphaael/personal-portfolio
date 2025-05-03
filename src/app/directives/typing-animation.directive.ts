import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appTypingAnimation]',
  standalone: true
})
export class TypingAnimationDirective implements OnInit {
  @Input() textToType: string = '';
  @Input() typingSpeed: number = 100;

  private index: number = 0;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.typeText();
  }

  private typeText() {
    if (this.index < this.textToType.length) {
      this.el.nativeElement.textContent = this.textToType.substring(0, this.index + 1);
      this.index++;
      setTimeout(() => this.typeText(), this.typingSpeed);
    }
  }
}
