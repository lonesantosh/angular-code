import { Component, EventEmitter } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-employee-add',
  styleUrl: './employee-add.css',
  templateUrl: './employee-add.html',
  outputs: ['addEmpEvent'],
})
export class EmployeeAdd {

   addEmpEvent = new EventEmitter();

  addEmp(eId: string, name: string, gender: string, salary: string) {
    const newEmpObj = { eId, name, gender, sal: salary };
    this.addEmpEvent.emit(newEmpObj);
  }

}
