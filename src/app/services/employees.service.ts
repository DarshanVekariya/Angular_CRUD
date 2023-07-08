import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employees } from '../models/employee.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  // baseapiUrl = 'https://localhost:44332/';
  baseapiUrl : string = 'https://localhost:44332/';

  constructor(private http: HttpClient) { }

  getAllEmployees():Observable<Employees[]>{
    return this.http.get<Employees[]>(this.baseapiUrl + 'api/Employees')
  }

  addEmployee(addEmployeeRequest:Employees):Observable<Employees>{
    addEmployeeRequest.id='00000000-0000-0000-0000-000000000000';
    return this.http.post<Employees>(this.baseapiUrl + 'api/Employees',addEmployeeRequest)
  }

  getEmployee(id:string):Observable<Employees>{
    return this.http.get<Employees>(this.baseapiUrl + 'api/Employees/' + id)
  }

  updateEmplyee(updateEmplyee:Employees,id:string):Observable<Employees>{
    return this.http.put<Employees>(this.baseapiUrl + 'api/Employees/' + id,updateEmplyee)
  }

  deleteEmployee(id:string):Observable<Employees>{
    return this.http.delete<Employees>(this.baseapiUrl + 'api/Employees/' + id);
  }
}
