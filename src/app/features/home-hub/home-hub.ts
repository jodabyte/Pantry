import {Component, computed, inject} from '@angular/core';
import {MatBottomSheet} from '@angular/material/bottom-sheet';
import {OptionsMenu} from '@features/home-hub/options-menu/options-menu';
import {HomeHubStore} from '@features/home-hub/home-hub-store';

import {ItemTypes} from '@features/collection/item-details/item-details.model';
import {ItemDetails} from '@features/collection/item-details/item-details';
import {Router} from '@angular/router';
import {MatList, MatListItem} from '@angular/material/list';
import {MatRipple} from '@angular/material/core';
import {MatMenu, MatMenuItem, MatMenuTrigger} from '@angular/material/menu';
import {MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {AddFab} from '@shared/add-fab/add-fab';

@Component({
  selector: 'app-home-hub',
  imports: [
    MatList,
    MatListItem,
    MatRipple,
    MatMenuTrigger,
    MatIconButton,
    MatIcon,
    MatMenu,
    MatMenuItem,
    AddFab
  ],
  templateUrl: './home-hub.html',
  styleUrl: './home-hub.scss',
})
export class HomeHub {
  private router = inject(Router);
  private optionsMenu = inject(MatBottomSheet);
  private data = inject(HomeHubStore);
  shoppingLists = computed(() => this.data.listAll());
  private itemDetails = inject(ItemDetails);

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
