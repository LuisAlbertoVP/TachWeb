import { Directive, ElementRef, Renderer2, OnInit, OnDestroy } from '@angular/core';
import { ScrollService } from '../services/scroll.service';

@Directive({
  selector: '[appAppearOnScroll]'
})
export class AppearOnScrollDirective implements OnInit, OnDestroy {
  private observer!: IntersectionObserver;

  constructor(
    private el: ElementRef, 
    private renderer: Renderer2,
    private scrollService: ScrollService
  ) {}

  ngOnInit() {
    const nativeEl = this.el.nativeElement;

    this.renderer.setStyle(nativeEl, 'opacity', '0');
    this.renderer.setStyle(nativeEl, 'transition', 'opacity 0.8s ease');
    this.renderer.setStyle(nativeEl, 'willChange', 'opacity');

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (this.scrollService.isScrollingManually) {
          return;
        }

        if (entry.isIntersecting) {
          this.renderer.setStyle(nativeEl, 'opacity', '1');
          this.observer.unobserve(nativeEl);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    this.observer.observe(nativeEl);
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
