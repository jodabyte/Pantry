import {Component, inject} from '@angular/core';
import {MatBottomSheetRef} from '@angular/material/bottom-sheet';
import {MatActionList, MatListItem} from '@angular/material/list';
import {ItemTypes} from '@features/collection/item-details/item-details.model';
import {ItemDetails} from '@features/collection/item-details/item-details';

@Component({
  selector: 'app-create-list',
  imports: [MatActionList, MatListItem],
  templateUrl: './create-list.html',
  styleUrl: './create-list.scss',
})
export class CreateList {
  private bottomSheetRef = inject(MatBottomSheetRef<CreateList>);
  private itemDetails = inject(ItemDetails);

  createShoppingList(): void {
    this.itemDetails.showDetails(ItemTypes.LIST)
    this.bottomSheetRef.dismiss();
  }
}
