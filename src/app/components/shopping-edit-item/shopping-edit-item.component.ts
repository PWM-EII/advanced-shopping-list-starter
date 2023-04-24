import {Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-edit-item',
  templateUrl: './shopping-edit-item.component.html',
  styleUrls: ['./shopping-edit-item.component.css']
})
export class ShoppingEditItemComponent  {

  @Input()
  itemName = '';

  @Output()
  updateItemEvent = new EventEmitter<string>();

  updateItem() {

  }

}
