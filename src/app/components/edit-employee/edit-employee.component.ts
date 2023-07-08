import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Employees } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent {

  employeeDetail : Employees ={
    id:'',
    name: '',
    email: '',
    phone: 0,
    salary: 0,
    department: ''
  } 

  constructor(private route:ActivatedRoute,private employeeService:EmployeesService,private router:Router){}

  ngOnInit():void{
    this.route.paramMap.subscribe({
      next:(params)=>{ 
        const id = params.get('id');
        if(id){
            this.employeeService.getEmployee(id)
            .subscribe({
              next:(response)=>{
                  this.employeeDetail = response;
              }
            });
        }else{
          alert(id);
        }
      }
    });
  }

  updateEmployee(){
    this.employeeService.updateEmplyee(this.employeeDetail,this.employeeDetail.id)
    .subscribe({
      next:(response)=>{
          this.router.navigate(['employee']);
      }
    });
  }

  deleteEmployee(){
    this.employeeService.deleteEmployee(this.employeeDetail.id)
    .subscribe({
      next:(response)=>{
        console.log(response);
          this.router.navigate(['employee']);
      }
    });
  }
}
