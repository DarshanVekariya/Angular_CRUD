import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Employees } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {  
  addEmployeeRequest : Employees ={
    id:'',
    name: '',
    email: '',
    phone: 0,
    salary: 0,
    department: ''
  }
  
  constructor (private employeeservice:EmployeesService,private router:Router){}

    addEmployee(){
      this.employeeservice.addEmployee(this.addEmployeeRequest)
      .subscribe({
        next:()=>{
          this.router.navigate(['employee']);
        }
      })
    }
}
