import { Component } from '@angular/core';
import { TwoComponent } from '../two-component';

@Component({
  selector: 'app-two-component',
  imports: [],
  templateUrl: './two-component.component.html',
  styleUrl: './two-component.component.css'
})
export class TwoComponentComponent {
  TwoComponent:TwoComponent = {
    id: 2,
    name: "Ольга",
    address: "г.Краснодар, ул. Ставропольская",
    isComplete: false
  }

}