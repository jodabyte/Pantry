import {Routes} from '@angular/router';
import {Catalog} from '@features/catalog/catalog';
import {ShoppingList} from '@features/collection/shopping-list/shopping-list';

export const routes: Routes = [
  {path: '', component: Catalog},
  {path: 'shopping-list/:id', component: ShoppingList},
];
