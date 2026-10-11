import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('@features/catalog/catalog').then((m) => m.Catalog) },
  {
    path: 'shopping-list/:id',
    loadComponent: () =>
      import('@features/collection/shopping-list/shopping-list').then((m) => m.ShoppingList),
  },
];
