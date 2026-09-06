import {Component, computed} from '@angular/core';
import {MatBottomSheet} from '@angular/material/bottom-sheet';
import {OptionsMenu} from '@features/catalog/options-menu/options-menu';
import {CatalogData} from '@features/catalog/catalog-data';

import {ItemTypes} from '@features/collection/item-details/item-details.model';
import {ItemDetails} from '@features/collection/item-details/item-details';
import {MatList, MatListItem} from '@angular/material/list';
import {MatMenu, MatMenuItem, MatMenuTrigger} from '@angular/material/menu';
import {MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {MatRipple} from '@angular/material/core';
import {Router} from '@angular/router';
import {AddFab} from '@core/add-fab/add-fab';

@Component({
  selector: 'app-catalog',
  imports: [
    MatList,
    MatListItem,
    MatMenuTrigger,
    MatIconButton,
    MatIcon,
    MatMenu,
    MatMenuItem,
    MatRipple,
    AddFab
  ],
  templateUrl: './catalog.html',
  styleUrl: './catalog.scss',
})
export class Catalog {
  shoppingLists = computed(() => this.data.listAll());

  constructor(
    private router: Router,
    private optionsMenu: MatBottomSheet,
    private data: CatalogData,
    private itemDetails: ItemDetails
  ) {
  }

  openOptionsMenu(): void {
    this.optionsMenu.open(OptionsMenu);
  }

  onItemSelected(id: number) {
    this.router.navigate(['/shopping-list', id]);
  }

  onEditItem(id: number) {
    this.itemDetails.showDetails(ItemTypes.LIST, {id})
  }

  onDeleteItem(id: number) {
    this.data.delete(id);
  }
}
