import { Component } from '@angular/core';
import {ViewportScroller} from "@angular/common";
import {TypingAnimationDirective} from "../../directives/typing-animation.directive";
import {TranslatePipe} from "@ngx-translate/core";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  standalone: true,
  imports: [
    TypingAnimationDirective,
    TranslatePipe
  ],
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  fullText = 'Fullstack Developer';

  constructor(private viewportScroller: ViewportScroller) { }

  scrollToSection(sectionId: string): void {
    this.viewportScroller.scrollToAnchor(sectionId.substring(1));
  }
}
