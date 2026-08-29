import {Component} from '@angular/core';
import {MatBottomSheet} from '@angular/material/bottom-sheet';
import {MatFabButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {MatActionList, MatListItem} from '@angular/material/list';
import {OptionsMenu} from '@features/catalog/options-menu/options-menu';
import {from} from 'rxjs';
import {liveQuery} from 'dexie';
import {db} from '@shared/db/db';
import {toSignal} from '@angular/core/rxjs-interop';
import {ShoppingList} from '@shared/db/db.model';

@Component({
  selector: 'app-catalog',
  imports: [MatActionList, MatFabButton, MatIcon, MatListItem],
  templateUrl: './catalog.html',
  styleUrl: './catalog.scss',
})
export class Catalog {
  shoppingLists = toSignal<ShoppingList[], ShoppingList[]>(
    from(liveQuery(() => db.shoppingLists.toArray())),
    {initialValue: [] as ShoppingList[]}
  );

  constructor(private optionsMenu: MatBottomSheet) {
  }

  openOptionsMenu(): void {
    this.optionsMenu.open(OptionsMenu);
  }
}
