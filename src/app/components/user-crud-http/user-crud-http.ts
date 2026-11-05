import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { UserService } from '../../services/user-service';
import { Observable } from 'rxjs';

@Component({
  imports: [CommonModule],
  selector: 'app-user-crud-http',
  styleUrl: './user-crud-http.css',
  templateUrl: './user-crud-http.html',
})
export class UserCrudHttp {

  
userService = inject(UserService);
  user$: Observable<any> | undefined;

  fetchUsers() {
    this.user$ = this.userService.getAllUsers();
    console.log(this.user$);
    this.user$.subscribe((response) => {
      console.log('Response:: ', response);
    });
  }

  deleteUser(userId: any) {
    const isConfirmed = confirm('Are you sure to delete?');
    if (isConfirmed) {
      this.userService.deleteUser(userId).subscribe((response) => {
        alert(`User with id ${userId} is Deleted Successfully!!`);
        this.fetchUsers();
      });
    }
  }

  addUser(name: any, age: any, sal: any, gender: any) {
    const newUser = { name, age, sal, gender };
    this.userService.addUser(newUser).subscribe((response) => {
      alert('User added successfully');
    });
  }
}
