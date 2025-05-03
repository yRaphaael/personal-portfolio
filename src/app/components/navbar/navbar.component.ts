import { Component, HostListener } from '@angular/core';
import {CommonModule, NgClass, ViewportScroller} from '@angular/common';
import {TranslatePipe, TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  standalone: true,
  imports: [
    CommonModule,
    TranslatePipe
  ],
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isMenuOpen = false;
  scrolled = false;
  isLanguageDropdownOpen = false;

  navLinks = [
    { href: '#home', name: 'navbar.link.home' },
    { href: '#about', name: 'navbar.link.about' },
    { href: '#skills', name: 'navbar.link.skills' },
    { href: '#contact', name: 'navbar.link.contact' }
  ];

  constructor(private viewportScroller: ViewportScroller, private translate: TranslateService) { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 10;
  }

  scrollToSection(sectionId: string): void {
    this.isMenuOpen = false;
    this.viewportScroller.scrollToAnchor(sectionId.substring(1));
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleLanguageDropdown(): void {
    this.isLanguageDropdownOpen = !this.isLanguageDropdownOpen;
  }

  switchLanguage(language: string): void {
    this.translate.use(language);
    this.isLanguageDropdownOpen = false;
  }
}
