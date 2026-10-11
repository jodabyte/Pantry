import {DB, ShoppingList} from '@core/db/db';
import {inject, Service} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {from} from 'rxjs';
import {liveQuery} from 'dexie';

@Service()
export class CatalogData {
  private db = inject(DB);
  private shoppingLists = toSignal<ShoppingList[], ShoppingList[]>(
    from(liveQuery(() => this.db.shoppingLists.toArray())),
    {initialValue: [] as ShoppingList[]}
  );

  listAll() {
    return this.shoppingLists();
  }

  async delete(id: number) {
    await this.db.shoppingLists.delete(id);
  }
}
