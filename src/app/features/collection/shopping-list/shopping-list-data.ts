import {inject, Service} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {DB, ShoppingListItem} from '@core/db/db';
import {from} from 'rxjs';
import {liveQuery} from 'dexie';

@Service()
export class ShoppingListData {
  private db = inject(DB);
  data = toSignal<ShoppingListItem[], ShoppingListItem[]>(
    from(liveQuery(() => this.db.shoppingListItems.toArray())),
    {initialValue: [] as ShoppingListItem[]}
  );

  listById(id: number) {
    return this.data().filter(item => item.shoppingListId === id);
  }
}
