import {Component} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import {MatError, MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {form, FormField, FormRoot} from '@angular/forms/signals';
import {
  listDetailsModel,
  ListDetailsModel,
  ListDetailsModelSchema
} from '@features/collection/shopping-list/list-details/list-details.model';

import {failure, ResponseDetails, success} from '@core/response-details/response-details';
import {db} from '../../../../shared/db/db';

@Component({
  selector: 'app-list-details',
  imports: [
    MatDialogTitle,
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatFormField,
    MatInput,
    MatButton,
    MatLabel,
    FormField,
    FormRoot,
    MatError
  ],
  templateUrl: './list-details.html',
  styleUrl: './list-details.scss',
})
export class ListDetails {
  editForm = form(listDetailsModel, ListDetailsModelSchema, {
    submission: {
      action: async (field) => {
        const result = await this.save(field().value());
        if (result.ok) return;
        return {kind: result.kind, message: result.message};
      },
    }
  });

  constructor(private dialogRef: MatDialogRef<ListDetails>) {
  }

  private async save(form: ListDetailsModel): Promise<ResponseDetails> {
    return db.shoppingLists.add({...form})
      .then((id) => {
        this.dialogRef.close(form);
        return success();
      })
      .catch((err) => {
        return failure(err.message, err)
      });
  }

}
