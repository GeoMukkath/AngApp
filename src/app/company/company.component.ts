import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  constructor(private r: Router) { }

  ngOnInit(): void {
  }
  showTest(){
    this.r.navigate(['/testpage']);
  }
}
