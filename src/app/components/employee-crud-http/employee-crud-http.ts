import { Component, inject } from '@angular/core';
import { EmployeeService } from '../../services/employee-service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-employee-crud-http',
  styleUrl: './employee-crud-http.css',
  templateUrl: './employee-crud-http.html',
})
export class EmployeeCrudHttp {

employeeService = inject(EmployeeService);
  employees$: Observable<any> | undefined;

  fetchEmployees() {
    this.employees$ = this.employeeService.getAllEmployees();
    console.log(this.employees$);
    this.employees$.subscribe((response) => {
      console.log('Response:: ', response);
    });
  }

  deleteEmp(empId: any) {
    const isConfirmed = confirm('Are you sure to delete?');
    if (isConfirmed) {
      this.employeeService.deleteEmployee(empId).subscribe((response) => {
        alert(`Employee with id ${empId} is Deleted Successfully!!`);
        this.fetchEmployees();
      });
    }
  }

  addEmp(firstName: any, lastName: any, email: any, gender: any, sal: any) {
    const newEmp = { firstName, lastName, email, gender, sal };
    this.employeeService.addEmployee(newEmp).subscribe((response) => {
      alert('employee added successfully');
    });
  }

}
