import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngApp';

  constructor(@Inject(MyserviceService) myserve, private router: Router){
    console.log(myserve);
  }

  showEmployee(){
    this.router.navigate(['/employee']); 
  }
}
