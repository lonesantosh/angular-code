import { Component } from '@angular/core';
import { EmployeeAdd } from '../employee-add/employee-add';
import { EmployeeTable } from '../employee-table/employee-table';

@Component({
  imports: [EmployeeTable, EmployeeAdd],
  selector: 'app-employee-crud',
  styleUrl: './employee-crud.css',
  templateUrl: './employee-crud.html',
})
export class EmployeeCrud {
  
 employees = [
    { eId: 101, name: 'santosh', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'Rahul', sal: 7000, gender: 'male' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
    { eId: 105, name: 'deepak', sal: 8000, gender: 'male' },
  ];
  deleteEmployee(ind: number) {
    this.employees.splice(ind, 1);
  }
  addEmployee(newEmp: any) {
    this.employees.push(newEmp);
  }

}
