import { Component, OnInit } from '@angular/core';
import { ToDoItem } from '../to-do-items';

@Component({
  selector: 'app-to-do-items',
  imports: [],
  templateUrl: './to-do-items.component.html',
  styleUrl: './to-do-items.component.css'
})


export class ToDoItemsComponent implements OnInit{
  toDoItem:ToDoItem = {
    id: 1,
    name: "Jone Doe",
    isComplete: false
  }

  constructor() {};
  ngOnInit() {};

}