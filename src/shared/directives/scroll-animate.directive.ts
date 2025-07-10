import { Directive, ElementRef, Renderer2, OnInit, Input } from '@angular/core';
import { ScrollService } from '../services/scroll.service';

@Directive({
  selector: '[appScrollAnimate]'
})
export class ScrollAnimateDirective implements OnInit {
  @Input('appScrollAnimate') delayIndex: number = 0;

  constructor(
    private el: ElementRef, 
    private renderer: Renderer2,
    private scrollService: ScrollService
  ) {}

  ngOnInit() {
    this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateY(20px)');
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'all 0.6s ease-out');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (this.scrollService.isScrollingManually) {
          return;
        }

        if (entry.isIntersecting) {
          const delay = this.delayIndex * 100;

          setTimeout(() => {
            this.renderer.setStyle(this.el.nativeElement, 'opacity', '1');
            this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateY(0)');
          }, delay);

          observer.unobserve(this.el.nativeElement);
        }
      });
    }, 
    { 
      threshold: 0.1, 
      rootMargin: '0px 0px -200px 0px' 
    });

    observer.observe(this.el.nativeElement);
  }
}
