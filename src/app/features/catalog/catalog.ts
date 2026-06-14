import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatFabButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatActionList } from '@angular/material/list';
import { OptionsMenu } from '@features/catalog/options-menu/options-menu';

@Component({
  selector: 'app-catalog',
  imports: [MatActionList, MatFabButton, MatIcon],
  templateUrl: './catalog.html',
  styleUrl: './catalog.scss',
})
export class Catalog {
  constructor(private optionsMenu: MatBottomSheet) {}

  openOptionsMenu(): void {
    this.optionsMenu.open(OptionsMenu);
  }
}
