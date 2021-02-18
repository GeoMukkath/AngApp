import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyComponent } from './company/company.component';
import { DeatilsComponent } from './deatils/deatils.component';
import { EmployeeComponent } from './employee/employee.component';
import { TestComponent } from './test/test.component';


const routes: Routes = [
  {path:'', redirectTo: 'testpage', pathMatch: 'full'},
  {path: 'employee' , component: EmployeeComponent},
  {path: 'company', component: CompanyComponent},
  {path: 'testpage', component: TestComponent},
  {path: 'details', component: DeatilsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
