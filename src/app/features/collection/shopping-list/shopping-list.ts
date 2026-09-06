import {Component, computed, inject, signal} from '@angular/core';
import {MatList, MatListItem} from '@angular/material/list';
import {ShoppingListData} from '@features/collection/shopping-list/shopping-list-data';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-shopping-list',
  imports: [
    MatList,
    MatListItem
  ],
  templateUrl: './shopping-list.html',
  styleUrl: './shopping-list.scss',
})
export class ShoppingList {
  private listId = signal(0);
  items = computed(() => this.shoppingListData.listById(this.listId()));
  private route = inject(ActivatedRoute);

  constructor(private shoppingListData: ShoppingListData) {
    this.route.params.subscribe((params) => {
      this.listId.set(Number(params['id']));
    });
  }
}
