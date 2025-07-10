import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ScrollService {
  isScrollingManually = false;

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.isScrollingManually = true;
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setTimeout(() => {
        this.isScrollingManually = false;
      }, 350);
    });
  }
}