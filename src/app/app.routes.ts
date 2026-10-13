import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('@features/home-hub/home-hub').then((m) => m.HomeHub)
  },
  {
    path: 'shopping-list/:id',
    loadComponent: () =>
      import('@features/collection/shopping-list/shopping-list').then((m) => m.ShoppingList),
  },
];
