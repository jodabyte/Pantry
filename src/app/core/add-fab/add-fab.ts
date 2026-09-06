import {Component} from '@angular/core';
import {MatFabButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-add-fab',
  imports: [
    MatFabButton,
    MatIcon
  ],
  templateUrl: './add-fab.html',
  styleUrl: './add-fab.scss',
})
export class AddFab {
}
