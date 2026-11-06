import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-http-demo2',
  styleUrl: './http-demo2.css',
  templateUrl: './http-demo2.html',
})
export class HttpDemo2 {

 user_api = 'https://jsonplaceholder.typicode.com/users';
  httpClient = inject(HttpClient);
  userArr: any = signal([]);

  ngOnInit() {
    this.fetchUsers();
  }
  
  fetchUsers() {
    this.httpClient.get(this.user_api).subscribe((response) => {
      this.userArr.set(response);
    });
  }

}
