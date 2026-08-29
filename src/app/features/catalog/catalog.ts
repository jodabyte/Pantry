import {Component, computed} from '@angular/core';
import {MatBottomSheet} from '@angular/material/bottom-sheet';
import {MatFabButton, MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {MatActionList, MatListItem} from '@angular/material/list';
import {OptionsMenu} from '@features/catalog/options-menu/options-menu';
import {MatMenu, MatMenuItem, MatMenuTrigger} from '@angular/material/menu';
import {CatalogData} from '@features/catalog/catalog-data';

@Component({
  selector: 'app-catalog',
  imports: [MatActionList, MatFabButton, MatIcon, MatListItem, MatIconButton, MatMenu, MatMenuItem, MatMenuTrigger],
  templateUrl: './catalog.html',
  styleUrl: './catalog.scss',
})
export class Catalog {
  shoppingLists = computed(() => this.data.listAll());

  constructor(private optionsMenu: MatBottomSheet,
              private data: CatalogData) {
  }

  openOptionsMenu(): void {
    this.optionsMenu.open(OptionsMenu);
  }

  onItemSelected(id: number) {
  }

  onEditItem(id: number) {
  }

  onDeleteItem(id: number) {
    this.data.delete(id);
  }
}
