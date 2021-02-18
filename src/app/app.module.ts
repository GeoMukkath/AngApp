import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { CompanyModule } from './company/company.module'
import { MyserviceService } from './myservice.service';
import { TestComponent } from './test/test.component';
import { DeatilsComponent } from './deatils/deatils.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    TestComponent,
    DeatilsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CompanyModule
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
