import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-shopping-add-item',
  templateUrl: './shopping-add-item.component.html',
  styleUrls: ['./shopping-add-item.component.css']
})
export class ShoppingAddItemComponent {

  newItemName = '';

  @Output()
  addItemEvent = new EventEmitter<string>();

  addItem(): void {
    
  }
}
