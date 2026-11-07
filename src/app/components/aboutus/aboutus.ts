import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-aboutus',
  styleUrl: './aboutus.css',
  templateUrl: './aboutus.html',
})
export class Aboutus {

   router = inject(Router);

  doSomethingGoToHome() {
    console.log('Do Something...');
    this.router.navigateByUrl('/home');
  }

}
