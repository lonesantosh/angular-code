import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Carousel } from './components/carousel/carousel';
import { Categories } from './components/categories/categories';
import { Navbar } from './components/navbar/navbar';
import { Body } from './components/body/body';
import { Footer } from './components/footer/footer';

@Component({
  imports: [
  // Carousel, 
   //Categories, 
   Navbar,
   Body,
   Footer
  ],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular_code');
}
