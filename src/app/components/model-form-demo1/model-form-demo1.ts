import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule, CommonModule],
  selector: 'app-model-form-demo1',
  styleUrl: './model-form-demo1.css',
  templateUrl: './model-form-demo1.html',
})
export class ModelFormDemo1 {

registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    /* this.registerForm = new FormGroup(
      {
        firstName: new FormControl('Santosh', [Validators.required, Validators.minLength(5)]),
        lastName: new FormControl('Lone', [Validators.required, Validators.minLength(5)]),
        email: new FormControl('lonesantosh183@gmail.com', [Validators.required, Validators.email]),
        address: new FormGroup({
          city: new FormControl('Nanded'),
          state: new FormControl('Maharashtra'),
          pincode: new FormControl(431704),
        }),
      },
      { updateOn: 'blur' },
    ); */

    this.registerForm = this.formBuilder.group({
      firstName: ['Santosh', [Validators.required, Validators.minLength(5)]],
      lastName: ['Lone', [Validators.required, Validators.minLength(5)]],
      email: ['lonesantosh183@gmail.com', [Validators.required, Validators.email]],
      gender: ['male', [Validators.required]],
      address: this.formBuilder.group({
        city: ['Nanded'],
        state: ['Maharashtra'],
        pincode: [431704],
      }),
    });
  }

  patchFormValue() {
    // this.registerForm.setValue({ firstName: 'Rohit' });
    this.registerForm.patchValue({ firstName: 'Rohit' });
  }

}
