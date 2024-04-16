import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
employee:Employee=new Employee(101,'bhagyashri',10000);
age:number=30;
 update()
 {
this.employee.name='anuja';
 }

}
class  Employee
{
  eid:number;
  name:string;
  salary:number;

constructor(eid:number,name:string,salary:number)
{
  this.eid=eid;
  this.name=name;
  this.salary=salary;
}
}