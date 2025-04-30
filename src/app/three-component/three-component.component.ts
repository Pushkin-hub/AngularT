import { Component } from '@angular/core';
import { FourComponentComponent } from '../four-component/four-component.component'

@Component({
  selector: 'app-three-component',
  imports: [FourComponentComponent],
  templateUrl: './three-component.component.html',
  styleUrl: './three-component.component.css'
})
export class ThreeComponentComponent {

}
