import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [CommonModule,FormsModule],
  selector: 'app-contactus',
  styleUrl: './contactus.css',
  templateUrl: './contactus.html',
})
export class Contactus {

  hasChanges: boolean = true;

  user = { firstName: 'Santosh', lastName: 'Lone' };

  submitMyForm(formData: any) {
    console.log(formData);
    this.hasChanges = false;
  }

}
