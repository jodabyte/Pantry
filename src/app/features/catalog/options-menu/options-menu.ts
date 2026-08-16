import {Component} from '@angular/core';
import {MatBottomSheetRef} from '@angular/material/bottom-sheet';
import {MatDialog} from '@angular/material/dialog';
import {MatActionList, MatListItem} from '@angular/material/list';
import {ListDetails} from '@features/collection/shopping-list/list-details/list-details';

@Component({
  selector: 'app-options-menu',
  imports: [MatActionList, MatListItem],
  templateUrl: './options-menu.html',
  styleUrl: './options-menu.scss',
})
export class OptionsMenu {
  constructor(
    private bottomSheetRef: MatBottomSheetRef<OptionsMenu>,
    private wizardDialog: MatDialog,
  ) {
  }

  createShoppingList(): void {
    this.wizardDialog.open(ListDetails);
    this.bottomSheetRef.dismiss();
  }
}
