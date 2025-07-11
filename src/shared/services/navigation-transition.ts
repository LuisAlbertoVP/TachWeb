import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class NavigationTransitionService {
  isNavigating = signal(false);

  constructor(private router: Router) {}

  navigateWithTransition(path: string) {
    this.isNavigating.set(true);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
      this.router.navigateByUrl(path).finally(() =>{
        this.isNavigating.set(false);
      });
    }, 250);
  }
}