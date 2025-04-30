import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToDoItemsComponent } from './to-do-items/to-do-items.component';
import { TwoComponentComponent } from './two-component/two-component.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    ToDoItemsComponent, 
    TwoComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'To do list';
}
