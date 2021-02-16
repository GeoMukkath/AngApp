import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyComponent } from './company/company.component';
import { EmployeeComponent } from './employee/employee.component';
import { TestComponent } from './test/test.component';


const routes: Routes = [
  {path: 'employee' , component: EmployeeComponent},
  {path: 'company', component: CompanyComponent},
  {path: 'testpage', component: TestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
