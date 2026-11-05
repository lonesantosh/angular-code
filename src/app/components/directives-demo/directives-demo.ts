import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [
FormsModule,
CommonModule

  ],
  selector: 'app-directives-demo',
  styleUrl: './directives-demo.css',
  templateUrl: './directives-demo.html',
})
export class DirectivesDemo {
 num: number = 2;

  courseArr = ['Angular', 'React', 'Web Development', 'Java', 'Python'];

  employeeArr = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
    { eId: 105, name: 'deepak', sal: 8000, gender: 'male' },
  ];

  myStyle1 = { color: 'green', backgroundColor: 'red', border: '5px dotted yellow' };
  myStyle2 = { color: 'grey', backgroundColor: 'orange', border: '5px dotted yellow' };

  myFunction() {
    return this.num % 2 == 0 ? this.myStyle1 : this.myStyle2;
  }

}
