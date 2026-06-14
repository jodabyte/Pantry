import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-wizard',
  imports: [
    MatDialogTitle,
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatFormField,
    MatInput,
    FormsModule,
    MatButton,
    MatLabel,
  ],
  templateUrl: './wizard.html',
  styleUrl: './wizard.scss',
})
export class Wizard {
  constructor(private dialogRef: MatDialogRef<Wizard>) {}

  createShoppingList(): void {}
}
