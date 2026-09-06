import Dexie, {type EntityTable} from 'dexie';
import {ShoppingList, ShoppingListItem} from './db.model';

const db = new Dexie('Pantry') as Dexie & {
  shoppingLists: EntityTable<ShoppingList, 'id'>;
  shoppingListItems: EntityTable<ShoppingListItem, 'id'>;
};

db.version(1)
  .stores({
    shoppingLists: '++id',
    shoppingListItems: '++id, shoppingListId',
  });

export {db};
