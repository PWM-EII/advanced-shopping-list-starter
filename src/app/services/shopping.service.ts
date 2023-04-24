import { Injectable } from '@angular/core';
import {ShoppingItem} from "../models/shopping-item.model";

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  private items: ShoppingItem[] = [
    { id: 1, name: 'Apples' },
    { id: 2, name: 'Bananas' },
    { id: 3, name: 'Oranges' }
  ];

  private nextId = 4;

  getItems(): ShoppingItem[] {
    return this.items.map(x => Object.assign({}, x));
  }

  addItem(name: string): void {
    const newItem = { id: this.nextId, name };
    this.items.push(newItem);
    this.nextId++;
  }

  removeItem(id: number): void {
    const index = this.items.findIndex(item => item.id === id);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  updateItem(id: number, newName: string): void {
    const index = this.items.findIndex(item => item.id === id);
    if (index !== -1) {
      this.items[index].name = newName;
    }
  }

}
