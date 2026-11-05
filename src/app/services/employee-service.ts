import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Employee } from '../models/employee';

@Service()
export class EmployeeService {

 httpClient = inject(HttpClient); // Dependency Injection
  api_url = 'http://localhost:3000/employees';

  getAllEmployees():Observable<Employee[]> {
    // Response is plain Javascript Object, Each Response object is not Employee class instance
    // return this.httpClient.get<Employee[]>(this.api_url);

    // Service Should convert Each response object to Employee class Object
    return this.httpClient.get<Employee[]>(this.api_url)
            .pipe(map((responseArr)=>{
              return responseArr.map(responseObj=>new Employee(responseObj))
            }))
  }
  getEmployeeById(id: any) {
    return this.httpClient.get(`${this.api_url}/${id}`);
  }
  addEmployee(empData: any) {
    return this.httpClient.post(this.api_url, empData);
  }
  updateEmployee(id: any, empData: any) {
    return this.httpClient.patch(`${this.api_url}/${id}`, empData);
  }
  deleteEmployee(id: any) {
    return this.httpClient.delete(`${this.api_url}/${id}`);
  }

}
