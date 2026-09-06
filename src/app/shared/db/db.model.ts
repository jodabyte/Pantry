export interface ShoppingList {
  id: number;
  name: string;
}

export interface ShoppingListItem {
  id: number;
  shoppingListId: number;
  name: string;
}
