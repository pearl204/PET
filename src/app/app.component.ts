import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  constructor(private router: Router) { 
  }

  btnClick=function(){
  	console.log ("Inside function call for call the product selection")
  	/*this.router.navigate('/productSelection');*/
  	this.router.navigate(['/productSelection']);

  	console.log ("Navigation over...")

  }
}
 