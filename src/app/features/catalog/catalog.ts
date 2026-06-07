import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { OptionsMenu } from './options-menu/options-menu';

@Component({
  selector: 'app-catalog',
  imports: [MatListModule, MatIconModule, MatButtonModule],
  templateUrl: './catalog.html',
  styleUrl: './catalog.scss',
})
export class Catalog {
  #optionsMenu: MatBottomSheet;

  constructor(optionsMenu: MatBottomSheet) {
    this.#optionsMenu = optionsMenu;
  }

  openOptionsMenu(): void {
    this.#optionsMenu.open(OptionsMenu);
  }
}
