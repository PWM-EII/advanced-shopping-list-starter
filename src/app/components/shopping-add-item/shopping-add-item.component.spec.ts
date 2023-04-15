import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ShoppingAddItemComponent } from './shopping-add-item.component';

describe('ShoppingAddItemComponent', () => {
  let component: ShoppingAddItemComponent;
  let fixture: ComponentFixture<ShoppingAddItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShoppingAddItemComponent],
      imports: [FormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingAddItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should set newItemName properly', () => {
    const testString = 'test';
    component.newItemName = testString;
    expect(component.newItemName).toBe(testString);
  });

  test('should emit event when addItem() is called', () => {
    const testString = 'test';
    jest.spyOn(component.addItemEvent, 'emit');
    component.newItemName = testString;
    component.addItem();
    expect(component.addItemEvent.emit).toHaveBeenCalledWith(testString);
  });
});



