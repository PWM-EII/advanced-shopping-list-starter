import {Component, OnInit} from '@angular/core';
import {ShoppingItem} from "../../models/shopping-item.model";
import {ShoppingService} from "../../services/shopping.service";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  items: ShoppingItem[] = [];
  selectedItem?: ShoppingItem;

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit(): void {

  }

  getItems(): void {

  }

  onAddItem(itemName: string): void {

  }

  selectItem(item: ShoppingItem): void {

  }

  removeItem(id: number): void {

  }

  onUpdateItem(itemName: string) {

  }
}
