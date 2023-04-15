import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import {FormsModule} from "@angular/forms";
import {ShoppingService} from "./services/shopping.service";
import {RouterModule} from "@angular/router";
import {routes} from "./app-routing.module";
import { ShoppingAddItemComponent } from './components/shopping-add-item/shopping-add-item.component';
import { ShoppingEditItemComponent } from './components/shopping-edit-item/shopping-edit-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    ShoppingAddItemComponent,
    ShoppingEditItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ShoppingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
