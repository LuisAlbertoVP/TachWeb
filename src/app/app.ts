import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Whatsapp } from './whatsapp/whatsapp';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Whatsapp],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'TachWeb';
}
