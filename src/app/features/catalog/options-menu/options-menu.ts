import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { MatActionList } from '@angular/material/list';
import { Wizard } from '@features/collection/shopping-list/wizard/wizard';

@Component({
  selector: 'app-options-menu',
  imports: [MatActionList],
  templateUrl: './options-menu.html',
  styleUrl: './options-menu.scss',
})
export class OptionsMenu {
  constructor(
    private bottomSheetRef: MatBottomSheetRef<OptionsMenu>,
    private wizardDialog: MatDialog,
  ) {}

  createShoppingList(): void {
    this.wizardDialog.open(Wizard);
    this.bottomSheetRef.dismiss();
  }
}
