import {Component, inject} from '@angular/core';
import {MatBottomSheetRef} from '@angular/material/bottom-sheet';
import {MatActionList, MatListItem} from '@angular/material/list';
import {ItemTypes} from '@features/collection/item-details/item-details.model';
import {ItemDetails} from '@features/collection/item-details/item-details';

@Component({
  selector: 'app-options-menu',
  imports: [MatActionList, MatListItem],
  templateUrl: './options-menu.html',
  styleUrl: './options-menu.scss',
})
export class OptionsMenu {
  private bottomSheetRef = inject(MatBottomSheetRef<OptionsMenu>);
  private itemDetails = inject(ItemDetails);

  createShoppingList(): void {
    this.itemDetails.showDetails(ItemTypes.LIST)
    this.bottomSheetRef.dismiss();
  }
}
