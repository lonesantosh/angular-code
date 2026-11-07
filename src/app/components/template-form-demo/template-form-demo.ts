import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule,CommonModule],
  selector: 'app-template-form-demo',
  styleUrl: './template-form-demo.css',
  templateUrl: './template-form-demo.html',
})
export class TemplateFormDemo {

user = { firstName: 'Santosh', lastName: 'Lone' };

  submitMyForm(formData: any) {
    console.log(formData);
  }

}
