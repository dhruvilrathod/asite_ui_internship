import { Component, EventEmitter, OnInit, Output } from '@angular/core';

interface Employee {
  name: string,
  id: number,
  contact: number,
  type: string,
  level: number
}

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

  @Output() contactChange = new EventEmitter<any>();

  public employees: Employee[] = [
    {
      name: 'Emp 1',
      id: 1,
      contact: 12345,
      type: 'Developer',
      level: 1
    },
    {
      name: 'Emp 2',
      id: 2,
      contact: 9876,
      type: 'Tester',
      level: 2
    },
    {
      name: 'Emp 3',
      id: 3,
      contact: 5678,
      type: 'Dev Ops',
      level: 3
    },
    {
      name: 'Emp 4',
      id: 4,
      contact: 85236,
      type: 'Developer',
      level: 2
    },
    {
      name: 'Emp 5',
      id: 5,
      contact: 741458,
      type: 'Tester',
      level: 1
    },
    {
      name: 'Emp 6',
      id: 6,
      contact: 14556,
      type: 'Dev Ops',
      level: 1
    }
  ]

  constructor() { }

  contactChangeFunction(name:string , e: any) { 
    this.contactChange.emit({name: name, contact: e.target.value});
  }
}
