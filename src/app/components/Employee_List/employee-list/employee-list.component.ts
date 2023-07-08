import { Component } from '@angular/core';
import { Employees } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
 employees : Employees[] =[];

 constructor(private employeeService:EmployeesService){}

 ngOnInit():void  {
   this.employeeService.getAllEmployees()
   .subscribe({
    next:(employees)=>{
      this.employees = employees;
      // console.log(employees);
    },
    error:(response)=>{
      console.log(response.error);
    }
   })
 }
}
  