import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Whatsapp } from './whatsapp/whatsapp';
import { NavigationTransitionService } from '../shared/services/navigation-transition';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Whatsapp],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'TachWeb';
  navService = inject(NavigationTransitionService);
}