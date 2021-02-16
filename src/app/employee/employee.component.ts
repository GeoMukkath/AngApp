import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  ngifeg = true;
  isvalid: boolean =true;
  employees: any[] = [
    { name: 'Rahul'},
    { name: 'Deepesh'},
    { name: 'Hans'},
    { name: 'Rohan'},
    { name: 'Jeet'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

  clicker(){
    console.log('You clicked me!');
    document.getElementById('para').innerHTML = 'Text';
  }

  changevalue(valid){
    this.isvalid = valid;
  }
  

}