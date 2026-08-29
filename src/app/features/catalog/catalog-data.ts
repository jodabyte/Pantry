import {db} from '@shared/db/db';
import {Service} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {ShoppingList} from '@shared/db/db.model';
import {from} from 'rxjs';
import {liveQuery} from 'dexie';

@Service()
export class CatalogData {
  private shoppingLists = toSignal<ShoppingList[], ShoppingList[]>(
    from(liveQuery(() => db.shoppingLists.toArray())),
    {initialValue: [] as ShoppingList[]}
  );

  listAll() {
    return this.shoppingLists();
  }
}
