import { Directive, ElementRef, Renderer2, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appScrollAnimate]'
})
export class ScrollAnimateDirective implements OnInit {
  @Input('appScrollAnimate') delayIndex: number = 0;

  constructor(
    private el: ElementRef, 
    private renderer: Renderer2,
  ) {}

  ngOnInit() {
    const nativeEl = this.el.nativeElement;

    this.renderer.setStyle(nativeEl, 'opacity', '0');
    this.renderer.setStyle(nativeEl, 'transform', 'translateY(20px)');
    this.renderer.setStyle(nativeEl, 'transition', 'all 0.6s ease-out');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const delay = this.delayIndex * 100;

            setTimeout(() => {
              this.renderer.setStyle(nativeEl, 'opacity', '1');
              this.renderer.setStyle(nativeEl, 'transform', 'translateY(0)');
            }, delay);

            observer.unobserve(nativeEl);
          }
        });
      }, 
      { threshold: 0.1 }
    );

    observer.observe(nativeEl);
  }
}