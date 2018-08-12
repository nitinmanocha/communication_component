import { Component, EventEmitter, Output} from '@angular/core';



@Component({
  selector: 'child',
  template: `
  <input type="number"  id="quantity" name="quantity" placeholder="enter the quantity to take out from stock ">

<button >Update stock</button>

`,
})
export class ChildComponent {
  title = 'App';
  @Output()
  Event = new EventEmitter(); 
 
  } 

