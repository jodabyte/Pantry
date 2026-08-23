import Dexie, {type EntityTable} from 'dexie';
import {ShoppingList} from './db.model';

const db = new Dexie('Pantry') as Dexie & {
  shoppingLists: EntityTable<ShoppingList, 'id'>;
};

db.version(1)
  .stores({
    shoppingLists: '++id',
  });

export {db};
