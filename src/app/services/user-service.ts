import { inject, Service } from '@angular/core';
import { User } from '../models/user';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Service()
export class UserService {

 httpClient = inject(HttpClient); // Dependency Injection
  api_url = 'http://localhost:3000/users';

  getAllUsers():Observable<User[]> {
    // Response is plain Javascript Object, Each Response object is not User class instance
    // return this.httpClient.get<User[]>(this.api_url);

    // Service Should convert Each response object to User class Object
    return this.httpClient.get<User[]>(this.api_url)
            .pipe(map((responseArr)=>{
              return responseArr.map(responseObj=>new User(responseObj))
            }))
  }

  getUserById(id: any) {
    return this.httpClient.get(`${this.api_url}/${id}`);
  }

  addUser(userData: any) {
    return this.httpClient.post(this.api_url, userData);
  }

  updateUser(id: any, userData: any) {
    return this.httpClient.patch(`${this.api_url}/${id}`, userData);
  }
  
  deleteUser(id: any) {
    return this.httpClient.delete(`${this.api_url}/${id}`);
  }

}
