import { Component, OnInit } from '@angular/core';
import { ToDoItem } from '../to-do-items';
import { ITEMS } from '../mock-to-do-items';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'

@Component({
  selector: 'app-to-do-items',
  imports: [FormsModule, MatSlideToggleModule],
  templateUrl: './to-do-items.component.html',
  styleUrl: './to-do-items.component.css'
})


export class ToDoItemsComponent implements OnInit{
  items = ITEMS;
  toDoItem:ToDoItem = {
    id: 1,
    name: "Jone Doe",
    isComplete: false
  };
  selectedItem!:ToDoItem;
  onSelect (item: ToDoItem): void {
    this.selectedItem = item;
  }
  update(isComplete: boolean) {
    this.selectedItem.isComplete = isComplete;
  }

  constructor() {};
  ngOnInit() {};

}