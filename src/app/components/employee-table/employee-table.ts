import { Component, EventEmitter } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-employee-table',
  styleUrl: './employee-table.css',
  templateUrl: './employee-table.html',
  inputs: ['employees'],
  outputs: ['deleteEmpEvent'],
})
export class EmployeeTable {

  employees: any;

  deleteEmpEvent = new EventEmitter();
  deleteEmp(index: number) {
    this.deleteEmpEvent.emit(index);
  }

}
