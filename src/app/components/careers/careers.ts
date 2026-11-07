import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet,RouterLink],
  selector: 'app-careers',
  styleUrl: './careers.css',
  templateUrl: './careers.html',
})
export class Careers {}
