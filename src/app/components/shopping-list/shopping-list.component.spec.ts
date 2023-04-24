import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { ShoppingListComponent } from './shopping-list.component';
import {ShoppingService} from "../../services/shopping.service";
import {ShoppingEditItemComponent} from "../shopping-edit-item/shopping-edit-item.component";
import {ShoppingAddItemComponent} from "../shopping-add-item/shopping-add-item.component";
import {ShoppingItem} from "../../models/shopping-item.model";

describe('ShoppingListComponent', () => {
  let component: ShoppingListComponent;
  let fixture: ComponentFixture<ShoppingListComponent>;
  let shoppingService: ShoppingService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ShoppingListComponent,
        ShoppingEditItemComponent,
        ShoppingAddItemComponent
      ],
      imports: [ FormsModule ],
      providers: [ ShoppingService ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingListComponent);
    component = fixture.componentInstance;
    shoppingService = TestBed.inject(ShoppingService);
    fixture.detectChanges();
  });

  test('should show correct number of items', () => {
    const list = fixture.nativeElement.querySelector('ul');
    expect(list.children.length).toBe(component.items.length);
  });

  test('should initialize items from the service', () => {
    const items = [
      { id: 1, name: 'Apples' },
      { id: 2, name: 'Bananas' },
      { id: 3, name: 'Oranges' },
    ];
    jest.spyOn(shoppingService, 'getItems').mockReturnValue(items);
    component.ngOnInit();

    expect(component.items).toEqual(items);
    expect(shoppingService.getItems).toHaveBeenCalled();
  });


  test('should update selectedItem when selectItem() is called', () => {
    const testItem = { id: 6, name: 'test' };
    component.selectItem(testItem);
    expect(component.selectedItem).toEqual(testItem);
  });

  test('should show update form when selectItem() is called', () => {
    const testItem = { id: 6, name: 'test' };

    jest.spyOn(component, 'selectItem');

    component.selectItem(testItem);
    fixture.detectChanges();

    const childComponent =
      fixture.nativeElement.querySelector('app-shopping-edit-item');
    const inputField = childComponent.querySelector('input[data-test="input"]');

    expect(inputField.value).toBe(test.name);
    expect(component.selectItem).toHaveBeenCalledWith(testItem);

  });

  test('should receive updateItemEvent event', () => {
    const item = { id: 1, name: 'test' };
    jest.spyOn(component, 'onUpdateItem');

    component.selectItem(item);
    fixture.detectChanges();

    const childComponent =
      fixture.nativeElement.querySelector('app-shopping-edit-item');
    const inputField = childComponent.querySelector('input[data-test="input"]');

    inputField.value = 'test1';
    inputField.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    const button = childComponent.querySelector('button[data-test="update"]');
    button.click();
    fixture.detectChanges();

    expect(component.onUpdateItem).toHaveBeenCalledWith('test1');
  });

  test('should update an item in the service', () => {
    const items: ShoppingItem[] = [
      { id: 1, name: 'Apples' },
      { id: 2, name: 'Bananas' },
      { id: 3, name: 'Oranges' }
    ];
    const item = { id: 1, name: 'Apple' };
    jest.spyOn(shoppingService, 'updateItem');

    component.selectItem(item);
    fixture.detectChanges();

    const childComponent =
      fixture.nativeElement.querySelector('app-shopping-edit-item');
    const inputField = childComponent.querySelector('input[data-test="input"]');

    inputField.value = 'Apples';
    inputField.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    const button = childComponent.querySelector('button[data-test="update"]');
    button.click();
    fixture.detectChanges();

    expect(shoppingService.updateItem).toHaveBeenCalledWith(item.id, 'Apples');
    expect(component.items).toEqual(items);
  });


  test('should remove item when removeItem() is called', () => {
    const items: ShoppingItem[] = [
      { id: 1, name: 'Apples' },
      { id: 3, name: 'Oranges' }
    ];
    const itemId = 2;
    jest.spyOn(shoppingService, 'removeItem');

    component.removeItem(itemId);

    expect(shoppingService.removeItem).toHaveBeenCalledWith(itemId);
    expect(component.items).toEqual(items);
  });

  test('should add item when onAddItem() is called', () => {
    const items: ShoppingItem[] = [
      { id: 1, name: 'Apples' },
      { id: 2, name: 'Bananas' },
      { id: 3, name: 'Oranges' },
      { id: 4, name: 'Milk' }
    ];

    const testItemName = 'Milk';
    jest.spyOn(shoppingService, 'addItem');
    component.onAddItem(testItemName);
    expect(shoppingService.addItem).toHaveBeenCalledWith(testItemName);
    expect(component.items).toEqual(items);
  });

});
