import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App';
   	  
  st1 = 120;  
  st2= 15;
   st3=25;  
  
   st1price=50000;
   st1item="iPhone";
   st2price=10000;
   st2item="laptop";
   st3price=20000;
   st3item="computer";
 

 
   update() {
    
		this.st1 = this.st1 - quantity;
		this.st2 = this.st2 - quantity;
		this.st3 = this.st3 - quantity;
	  }
}
