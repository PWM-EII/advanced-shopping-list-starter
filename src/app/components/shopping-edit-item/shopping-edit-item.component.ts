import {Component, EventEmitter, Input,
  OnChanges, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-shopping-edit-item',
  templateUrl: './shopping-edit-item.component.html',
  styleUrls: ['./shopping-edit-item.component.css']
})
export class ShoppingEditItemComponent implements OnChanges {

  @Input()
  itemName = '';

  @Output()
  updateItemEvent = new EventEmitter<string>();

  ngOnChanges(changes: SimpleChanges): void {

  }

  updateItem() {

  }

}
