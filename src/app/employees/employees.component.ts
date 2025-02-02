import { Component } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {
  employees = [
    {
      id : 1,
      name : 'Rao',
      department : 'IT'
    },
    {
      id : 2,
      name : 'Veer',
      department : 'OPerations'
    },
    {
      id : 3,
      name : 'Shakti',
      department : 'HR'
    },
    {
      id : 4,
      name : 'Deva',
      department : 'Sales'
    }
  ]
}
