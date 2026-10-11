import Dexie, {type EntityTable} from 'dexie';
import {type EnvironmentProviders, InjectionToken, makeEnvironmentProviders} from '@angular/core';

export interface ShoppingList {
  id: number;
  name: string;
}

export interface ShoppingListItem {
  id: number;
  shoppingListId: number;
  name: string;
}

export type PantryDb = Dexie & {
  shoppingLists: EntityTable<ShoppingList, 'id'>;
  shoppingListItems: EntityTable<ShoppingListItem, 'id'>;
};

export const DB = new InjectionToken<PantryDb>('PantryDb');

export function provideDb(): EnvironmentProviders {
  return makeEnvironmentProviders([
    {provide: DB, useFactory: createDb},
  ]);
}

function createDb(): PantryDb {
  const db = new Dexie('Pantry') as PantryDb;

  db.version(1)
    .stores({
      shoppingLists: '++id',
      shoppingListItems: '++id, shoppingListId',
    });

  return db;
}
