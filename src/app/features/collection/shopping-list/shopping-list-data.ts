import {Service} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {ShoppingListItem} from '@shared/db/db.model';
import {from} from 'rxjs';
import {db} from '@shared/db/db';
import {liveQuery} from 'dexie';

@Service()
export class ShoppingListData {
  data = toSignal<ShoppingListItem[], ShoppingListItem[]>(
    from(liveQuery(() => db.shoppingListItems.toArray())),
    {initialValue: [] as ShoppingListItem[]}
  );

  listById(id: number) {
    return this.data().filter(item => item.shoppingListId === id);
  }
}
