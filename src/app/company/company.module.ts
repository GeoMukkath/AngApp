import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeLogInComponent } from './employee-log-in/employee-log-in.component';
import { CompanyComponent } from './company.component';

@NgModule({
  declarations: [EmployeeLogInComponent, CompanyComponent],
  imports: [
    CommonModule
  ]
})
export class CompanyModule { }
