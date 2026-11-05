import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-http-demo1',
  styleUrl: './http-demo1.css',
  templateUrl: './http-demo1.html',
})
export class HttpDemo1 {

 user_api = 'https://jsonplaceholder.typicode.com/users';

        httpClient = inject(HttpClient);      // Dependency Injection
  // constructor(private http: HttpClient) {} // Dependency Injection

  ngOnInit() {
    this.fetchUser_javascript();
    this.fetchUser_angular();
  }

  fetchUser_javascript() {
    // fetch() returns a promise, to get data we use then()
    fetch(this.user_api).then((response) => {
      response.json().then((userArr) => {
        console.log('JavaScript: ', userArr);
      });
    });
  }

  fetchUser_angular() {
    // httpClient.get() returns Observable, to get data we use subscribe()
    this.httpClient.get(this.user_api).subscribe((response) => {
      console.log('Angular:', response);
    });
  }

}
