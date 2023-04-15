import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { SimpleChanges } from '@angular/core';
import { ShoppingEditItemComponent } from './shopping-edit-item.component';

describe('ShoppingEditItemComponent', () => {
  let component: ShoppingEditItemComponent;
  let fixture: ComponentFixture<ShoppingEditItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShoppingEditItemComponent],
      imports: [FormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingEditItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should set itemName properly', () => {
    const testString = 'test';
    component.itemName = testString;
    expect(component.itemName).toBe(testString);
  });

  test('should emit event when updateItem() is called', () => {
    const testString = 'test';
    jest.spyOn(component.updateItemEvent, 'emit');
    component.itemName = testString;
    component.updateItem();
    expect(component.updateItemEvent.emit).toHaveBeenCalledWith(testString);
  });


});
